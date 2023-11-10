import { Flex, Select, Tooltip } from "antd";
import React from "react";
import styles from "./SubHeader.module.css";

const SubHeader = ({ onChangeCategory }) => {
  const categorys = [
    "General",
    "Business",
    "Entertainment",
    "Health",
    "Science",
    "Sports",
    "Technology",
  ];

  return (
    <Flex align="center" justify="flex-end" gap="large" className={styles.sub}>
      <Tooltip title="Choose your category">
        <Select
          defaultValue="General"
          style={{ width: 135 }}
          placeholder="Choose Category"
          options={categorys.map((opt) => {
            return { label: opt, value: opt };
          })}
          onChange={(value) => onChangeCategory(value)}
        ></Select>
      </Tooltip>
    </Flex>
  );
};

export default SubHeader;
