const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db");

const app = express();

app.use(bodyParser.json());

db.pool.query(
  `
    CREATE TABLE tbl_posts (
      id INTEGER AUTO_INCREMENT,
      content TEXT,
      PRIMARY KEY (id)
    )
`,
  (err, result) => {
    if (err) {
      console.log("테이블 만들기 에러 ", err);
    } else {
      console.log("테이블 만들기 성공 ", result);
    }
  }
);

app.get("/api/posts", (req, res) => {
  console.log("get 요청 왔음");
  db.pool.query(
    `
    SELECT
        *
    FROM tbl_posts
    `,
    (err, result) => {
      if (err) {
        console.log("에러가 뭔데: ", err);
        return res.status(500).send(err);
      } else {
        console.log("결과가 뭔데: ", result);
        return res.send(result);
      }
    }
  );
});

app.post("/api/posts", (req, res) => {
  console.log("post 요청 왔음");
  db.pool.query(
    `
    INSERT INTO tbl_posts (
        content
    ) VALUES (
        '${req.body.content}'
    )
    `,
    (err, result) => {
      if (err) {
        console.log("에러가 뭔데: ", err);
        return res.status(500).send(err);
      } else {
        console.log("결과가 뭔데: ", result);
        return res.send({ success: true, result });
      }
    }
  );
});

app.listen(5000, () => {
  console.log("Server is Running on port 5000!!");
});
