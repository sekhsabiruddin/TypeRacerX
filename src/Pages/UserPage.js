import React, { useEffect, useState } from "react";
import TableUserData from "../componets/TableUserData";
import { db, auth } from "../firebaseConfig";
import CircularProgress from "@mui/material/CircularProgress";
import Graph from "../componets/Graph";
import UserInfo from "../componets/UserInfo";
const UserPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [graphData, setGraphData] = useState([]);

  const fetchUserData = async () => {
    try {
      auth.onAuthStateChanged((user) => {
        if (user) {
          const { uid } = user;
          let tempGraphData = [];
          const resultsRef = db.collection("Results");
          resultsRef
            .where("userId", "==", uid)
            .orderBy("timeStamp", "desc")
            .get()
            .then((snapshot) => {
              const userData = snapshot.docs.map((doc) => doc.data());

              snapshot.docs.forEach((doc) => {
                tempGraphData.push([
                  doc.data().timeStamp.toDate().toLocaleString().split(",")[0],
                  doc.data().wpm,
                ]);
              });
              setGraphData(tempGraphData.reverse());
              setData(userData);

              setLoading(false);
            })
            .catch((error) => {
              console.log("Error fetching user data:", error);
              setLoading(false);
            });
        } else {
          console.log("User not authenticated.");
          setLoading(false);
        }
      });
    } catch (error) {
      console.log("Error fetching user data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="canvas">
      {loading ? (
        <CircularProgress
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            marginLeft: "auto",
            marginRight: "auto",
            size: "300px",
          }}
        />
      ) : (
        <>
          <UserInfo totalTestTaken={data.length} />
          <div className="graph-user-page">
            <Graph graphData={graphData} style={{ width: "100%" }} />
          </div>
          <TableUserData data={data} />
        </>
      )}
    </div>
  );
};

export default UserPage;
