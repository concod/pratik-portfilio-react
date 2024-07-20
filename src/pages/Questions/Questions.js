import React, { useEffect } from "react";

import { Menu } from "antd";
import "./Questions.scss";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { routes } from "utils/routes";
import { CopyBlock, dracula } from "react-code-blocks";

const items = [
  {
    key: "sub1",
    label: "Questions",
    icon: <QuestionCircleOutlined />,
    children: [
      {
        key: "js",
        label: "Javascript Questions",
        children: [
          {
            key: "1",
            label: "merge two arrays",
            question: "",
          },
          {
            key: "2",
            label: "question on object",
          },
        ],
      },
      {
        key: `react-1`,
        label: "React Questions",
      },
    ],
  },
];
function Questions() {
  const jsPath = routes.questions.js.path;
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  console.log(params, location);

  useEffect(() => {
    console.log("llll");
  }, []);
  const onClick = (e) => {
    const isJs = location.pathname.includes("js");
    navigate(isJs && jsPath.replace(":id", e.key));
  };
  return (
    <div className="questions_main">
      <Menu
        style={{ width: 256 }}
        onClick={onClick}
        mode="inline"
        items={items}
      />
      <div className="questions_main_right">
        <CopyBlock
          language="jsx"
          text={
            "\"import React from 'react';\nimport { Link } from 'react-router-dom';\n\nfunction HomePage() {\n  const questionId = 1; // or any dynamic value\n\n  return (\n    <div>\n      <h1>Home Page</h1>\n      <Link to={`/questions/js/${questionId}`}>Go to Question {questionId}</Link>\n    </div>\n  );\n}\n\nexport default HomePage;\""
          }
          wrapLines={true}
          theme={dracula}
        />
      </div>
    </div>
  );
}

export default Questions;
