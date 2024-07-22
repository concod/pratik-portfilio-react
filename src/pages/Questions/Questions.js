import { useContext, useEffect, useState } from "react";

import { Menu, Spin, Flex } from "antd";
import "./Questions.scss";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { routes } from "utils/routes";
import { CodeBlock, CopyBlock, dracula } from "react-code-blocks";
import { fetchData } from "services/api";
import JsQuestions from "components/JsQuestions/JsQuestions";
import { ThemeContext } from "contexts/ThemeContext";

const ITEMS = [
  {
    key: "sub1",
    label: "Questions",
    icon: <QuestionCircleOutlined />,
    children: [
      {
        key: "js",
        label: "Javascript Questions",
        children: [],
      },
      {
        key: `react`,
        label: "React Questions",
        // children: [],
      },
    ],
  },
];

function Questions() {
  const [jsData, setJsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState(ITEMS);
  const jsPath = routes.questions.js.path;
  const params = useParams();
  const location = useLocation();
  const { state } = useContext(ThemeContext);
  const navigate = useNavigate();
  const isDark = state.themeCurrent === "dark";
  //   console.log(params, location);

  useEffect(() => {
    fetchData({ endpoint: "api/js-questions" })
      .then((res) => {
        const data = res.data.map((val) => {
          return {
            id: val.id,
            ...val.attributes,
          };
        });

        setItems((items) => {
          items[0].children = items[0].children.map((item) => {
            if (item.key === "js") {
              item.children = data.map((val) => ({
                label: val.label,
                key: val.key,
                id: val.id,
              }));
            }
            return item;
          });
          return items;
        });
        setJsData(data);
        setLoading(false);
      })
      .catch((err) => err);
  }, []);

  useEffect(() => {
    if (loading) return;
    const element = document.getElementById(params.id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [params, loading]);

  const onClick = (e) => {
    const isJs = location.pathname.includes("js");
    navigate(isJs && jsPath.replace(":id", `js-${e.key}`));
  };

  if (loading) return <Spin tip="Loading..." fullscreen size="large" />;

  return (
    <div className={isDark ? "questions_main dark" : "questions_main light"}>
      <Menu
        className={
          isDark ? "questions_main_menu dark" : "questions_main_menu light"
        }
        onClick={onClick}
        mode="inline"
        defaultOpenKeys={["sub1", "js"]}
        items={items}
      />
      <div className="questions_main_right">
        <div className="questions_main_right_container">
          <JsQuestions data={jsData} />
        </div>

        {/* <CodeBlock
          copied={"false"}
          language="jsx"
          text={data[0]?.code}
          wrapLines={true}
          theme={dracula}
        /> */}
      </div>
    </div>
  );
}

export default Questions;
