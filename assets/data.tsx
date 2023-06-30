import React from "react";
import { Icon } from "lib";

export function getDropdownItems() {
  return [
    {
      name: "Restore Items",
      action() {
        console.log("restore items");
      },
    },
    {
      name: "Delete Items",
      action() {
        console.log("delete items");
      },
    },
  ];
}

export function getDropdownItemsWithActive() {
  return [
    {
      name: "Restore Items",
      action() {
        console.log("restore items");
      },
    },
    {
      name: "Delete Items",
      active: true,
      action() {
        console.log("delete items");
      },
    },
  ];
}

export function getDropdownItemsWithSeparator() {
  return [
    {
      name: "Restore Items",
      action() {
        console.log("restore items");
      },
    },
    {
      type: "separator",
    },
    {
      name: "Delete Items",
      action() {
        console.log("delete items");
      },
    },
  ];
}

export function getDropdownAvatar() {
  return [
    {
      name: "Results",
      action: () => {},
      additional: <Icon name="cross" text="close" hideText />,
      type: "title",
    },
    {
      type: "avatar",
      name: "Mr Ben",
      email: "hey@heythere.com",
      url: "https://d3iw72m71ie81c.cloudfront.net/female-83.jpg",
      initials: "MB",
      action() {
        console.log("sup");
      },
    },
    {
      type: "avatar",
      name: "Harold Ramis",
      email: "nicescottie@bopper.com",
      initials: "HR",
      action() {
        console.log("sup");
      },
    },
  ];
}
