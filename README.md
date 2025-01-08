# Frontend interview task

## Overview

This project involves creating a web application based on the given API response and design requirements. The application should display reward options, allow row selection, calculate the sum of Assets under Management (AuM) for selected rows, and compute rewards based on user input.

## Data

The provided API response contains a list of reward options, each with associated metrics and providers. Below is a sample of the data structure:

```javascript
const data = [
    {
        id: 'rewardOption-1',
        type: { key: 'pos' },
        metrics: [
            {
                id: '6642aadca1bf2a657d38c5a9',
                label: 'Reward Rate',
                metricKey: 'reward_rate',
                defaultValue: 2.920908,
            },
            {
                id: '6642aadba1bf2a657d38c5a6',
                label: 'AuM',
                metricKey: 'assets_under_management',
                defaultValue: 9227765317.071049,
            },
            {
                id: '6642aad9ebe041c4fe953c2f',
                label: 'Commission',
                metricKey: 'commission',
                defaultValue: 14.000000000000002,
            },
        ],
        providers: [
            {
                id: 'provider-1',
                logoUrl:
                    'https://storage.googleapis.com/stakingrewards-static/images/providers/production/eigenlayer/0x529ec9ac9a80428cf8c92557f2eb1b336616f543.png',
                name: 'Allnodes',
                slug: 'allnodes',
                type: { key: 'pos' },
            },
            {
                id: '5fcce9256d61c4000724ac04',
                slug: 'lido-finance',
                name: 'Lido Finance',
                logoUrl:
                    'https://cms.stakingrewards.com/wp-content/uploads/2020/12/lido_symbol.png',
                type: {
                    key: 'liquid-staking',
                },
            },
        ],
    },
    {
        id: 'rewardOption-2',
        type: { key: 'pos' },
        providers: [
            {
                id: 'provider-2',
                logoUrl:
                    'https://storage.googleapis.com/stakingrewards-static/images/providers/production/eigenlayer/0x1f8c8b1d78d01bcc42ebdd34fae60181bd697662.png',
                name: 'Kiln',
                slug: 'kiln',
                type: { key: 'pos' },
            },
        ],
        metrics: [
            {
                id: '6642aadca1bf2a657d38c5a9',
                label: 'Reward Rate',
                metricKey: 'reward_rate',
                defaultValue: 2.443,
            },
            {
                id: '6642aadba1bf2a657d38c5a6',
                label: 'AuM',
                metricKey: 'assets_under_management',
                defaultValue: 18632938564.123456,
            },
            {
                id: '6642aad9ebe041c4fe953c2f',
                label: 'Commission',
                metricKey: 'commission',
                defaultValue: 5.000000000000002,
            },
        ],
    },
    {
        id: 'rewardOption-3',
        type: { key: 'liquid-staking' },
        providers: [
            {
                id: 'provider-1',
                logoUrl:
                    'https://storage.googleapis.com/stakingrewards-static/images/providers/production/eigenlayer/0x529ec9ac9a80428cf8c92557f2eb1b336616f543.png',
                name: 'Allnodes',
                slug: 'allnodes',
                type: { key: 'pos' },
            },
            {
                id: '5fcce9256d61c4000724ac04',
                slug: 'lido-finance',
                name: 'Lido Finance',
                logoUrl:
                    'https://cms.stakingrewards.com/wp-content/uploads/2020/12/lido_symbol.png',
                type: {
                    key: 'liquid-staking',
                },
            },
        ],
        metrics: [
            {
                id: '6642aadca1bf2a6733d38c543',
                label: 'Reward Rate',
                metricKey: 'reward_rate',
                defaultValue: 3.14,
            },
            {
                id: '6642aadba1bf2a657d38c573',
                label: 'AuM',
                metricKey: 'assets_under_management',
                defaultValue: 13900000000.62,
            },
            {
                id: '6642aad9ebe041c4fe953c24',
                label: 'Commission',
                metricKey: 'commission',
                defaultValue: 10.000000000000002,
            },
        ],
    },
];
```

## **Task Requirements**

**Data Display**

- Render the data in a row list format, showing metrics and provider matching the reward option type for each reward option.

**Sorting**

- Implement sorting by selected metric

**Row Selection**

- Allow users to select rows and display the sum of the AuM values for the selected rows at the bottom of the table.

**Staking Amount Input**

- Provide an input field for the user to enter a staking amount. Based on this input, calculate and display the rewards for each row.

## Design

![alt text](https://stakingrewards.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F93d50457-905b-445a-8371-d85f3ae7fe4d%2F34a79931-034f-4ca4-a6b0-19918f1a9ebd%2FUntitled.png?table=block&id=940e8054-9cd0-4c44-9c51-b0afdf5e2aea&spaceId=93d50457-905b-445a-8371-d85f3ae7fe4d&width=1420&userId=&cache=v2)


## Technical Requirements

- Use React for frontend development.

- You may use any state management library of your choice.

- Ensure the code is clean, well-documented, and follows best practices.