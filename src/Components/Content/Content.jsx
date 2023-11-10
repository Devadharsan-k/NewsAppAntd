import { Button, Card, FloatButton, Image, List, Spin, Typography } from "antd";
import { useEffect, useState } from "react";
import newsImg from "../../assets/pexels-miguel-á-padriñán-2882634.jpg";
import styles from "./Content.module.css";

const { Meta } = Card;

const Content = ({ selectedCategory }) => {
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let getData = async () => {
      setLoading(true);
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${selectedCategory}&pageSize=100&apiKey=${
        import.meta.env.VITE_API_KEY
      }`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setTimeout(() => {
            setArticle(data.articles);
            setLoading(false);
          }, 1500);
        });
    };
    getData();
  }, [selectedCategory]);

  return (
    <div className={styles.cardContainer}>
      {loading ? (
        <Spin size="large" className={styles.spin} />
      ) : (
        <List
          className={styles.center}
          grid={{ xs: 1, sm: 1, md: 2, lg: 2, xl: 3, xxl: 4 }}
          dataSource={article}
          renderItem={(news, index) => {
            return (
              <Card
                className={styles.card}
                hoverable
                key={index}
                cover={
                  <Image
                    className={styles.cardImg}
                    src={news.urlToImage ? news.urlToImage : newsImg}
                  />
                }
                actions={[
                  <a href={news.url} target="blank">
                    <Button type="primary">Read More</Button>
                  </a>,
                ]}
              >
                <Meta
                  title={news.title}
                  description={
                    <Typography.Paragraph
                      ellipsis={{
                        rows: 2,
                        expandable: true,
                        symbol: "more...",
                      }}
                    >
                      {news.title}
                    </Typography.Paragraph>
                  }
                />
              </Card>
            );
          }}
        ></List>
      )}
      <FloatButton.BackTop
        className={styles.floatBtn}
        duration={150}
        visibilityHeight={150}
      />
    </div>
  );
};

export default Content;
