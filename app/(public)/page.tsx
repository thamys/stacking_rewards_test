"use client";
import React from "react";
import { Button } from "@ui/index";
import { Flex, Form, Input, Table, Typography } from "antd";
import { ColumnsType } from "antd/es/table";
import { data, Provider, RewardOption } from "@/infra/interfaces/data";
import Image from "next/image";

export default function Home() {
  const [sortBy, setSortBy] = React.useState<"reward_rate" | "aum">(
    "reward_rate"
  );

  const columns: ColumnsType<RewardOption> = [
    {
      dataIndex: "index",
      key: "index",
      onHeaderCell: () => {
        return {
          style: {
            display: "none",
          },
        };
      },
      render: (_, obj, index) => {
        return <Typography.Title level={5}>{index}</Typography.Title>;
      },
    },
    {
      dataIndex: "providers",
      key: "providers",
      onHeaderCell: () => {
        return {
          style: {
            display: "none",
          },
        };
      },
      render: (providers: Provider[], obj: RewardOption) => {
        console.log(providers);
        const rewardType = obj.type.key;
        const providerToShow = providers?.find((provider: Provider) => {
          return provider.type.key === rewardType;
        });
        return (
          <Flex gap={12} align="center">
            <Image
              src={providerToShow?.logoUrl || "/images.logo.svg"}
              width={42}
              height={42}
              alt={providerToShow?.name || "Provider Name"}
            />
            <Typography.Title level={5}>
              {providerToShow?.name}
            </Typography.Title>
          </Flex>
        );
      },
    },
    {
      dataIndex: "metrics.reward_rate",
      key: "rewardRate",
      onHeaderCell: () => {
        return {
          style: {
            display: "none",
          },
        };
      },
      sortOrder: sortBy === "reward_rate" ? "descend" : undefined,
      sorter: (a, b) => {
        const aRewardRate = a.metrics.find(
          (metric) => metric.metricKey === "reward_rate"
        );
        const bRewardRate = b.metrics.find(
          (metric) => metric.metricKey === "reward_rate"
        );

        if (!aRewardRate || !bRewardRate) return 0;

        return aRewardRate.defaultValue - bRewardRate.defaultValue;
      },
      render: (_, record) => {
        const rewardRate = record.metrics.find(
          (metric) => metric.metricKey === "reward_rate"
        );
        return (
          <div className="flex flex-col gap-2 px-4 w-full py-2 bg-gray-100 rounded-lg">
            <Typography.Text className=" !text-gray-400 ">
              {" "}
              Reward Rate
            </Typography.Text>
            <Typography.Text>
              {rewardRate?.defaultValue.toFixed(2) || 0}%
            </Typography.Text>
          </div>
        );
      },
    },
    {
      dataIndex: "metrics.assets_under_management",
      key: "assetsUnderManagement",
      onHeaderCell: () => {
        return {
          style: {
            display: "none",
          },
        };
      },
      sortOrder: sortBy === "aum" ? "descend" : undefined,
      sorter: (a, b) => {
        const aAssetsUnderManagement = a.metrics.find(
          (metric) => metric.metricKey === "assets_under_management"
        );
        const bAssetsUnderManagement = b.metrics.find(
          (metric) => metric.metricKey === "assets_under_management"
        );

        if (!aAssetsUnderManagement || !bAssetsUnderManagement) return 0;

        return (
          aAssetsUnderManagement.defaultValue -
          bAssetsUnderManagement.defaultValue
        );
      },
      render: (_, record) => {
        const assetsUnderManagement = record.metrics.find(
          (metric) => metric.metricKey === "assets_under_management"
        );
        return (
          <div className="flex flex-col gap-2 px-4 w-full py-2 bg-gray-100 rounded-lg">
            <Typography.Text className=" !text-gray-400 ">AuM</Typography.Text>
            <Typography.Text>
              {assetsUnderManagement?.defaultValue.toFixed(2) || 0}
            </Typography.Text>
          </div>
        );
      },
    },
    {
      dataIndex: "metrics.commission",
      key: "rewards",
      onHeaderCell: () => {
        return {
          style: {
            display: "none",
          },
        };
      },
      render: (_, record) => {
        const commission = record.metrics.find(
          (metric) => metric.metricKey === "commission"
        );
        const rewardRate = record.metrics.find(
          (metric) => metric.metricKey === "reward_rate"
        );

        if (!commission || !rewardRate) return <></>;

        const rewards = rewardRate?.defaultValue * commission?.defaultValue;
        return (
          <div className="flex flex-col gap-2 px-4 w-full py-2 bg-gray-100 rounded-lg">
            <Typography.Text className=" !text-gray-400 ">
              Rewards
            </Typography.Text>
            <Typography.Text>{rewards.toFixed(2) || 0}%</Typography.Text>
          </div>
        );
      },
    },
  ];

  return (
    <div className="p-10 flex flex-col gap-4">
      <div className="flex justify-start items-center gap-10">
        <Typography.Title level={2}>Reward Options</Typography.Title>
        <div className="flex justify-start items-center gap-2">
          <Typography.Text>Sort by:</Typography.Text>
          <Button type="primary" onClick={() => setSortBy("reward_rate")}>
            Reward Rate
          </Button>
          <Button type="primary" onClick={() => setSortBy("aum")}>
            AuM
          </Button>
        </div>
      </div>
      <Form>
        <Form.Item name="staking-amount" label="Staking amount">
          <Input />
        </Form.Item>
      </Form>
      <Table columns={columns} dataSource={data} />
    </div>
  );
}
