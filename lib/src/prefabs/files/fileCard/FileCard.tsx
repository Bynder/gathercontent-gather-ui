import React from "react";
import cx from "classnames";
import { Card } from "lib";

function FileCard({
  preview,
  meta,
  controls,
  insetMeta,
  children,
  size,
  innerClassName,
  ...cardProps
}: any) {
  const cardClassNames = cx("gui-file-card group", cardProps.className, {
    "w-full": size !== "thumbnail",
    "w-8 h-8": size === "thumbnail",
    "gui-file-card-inset-meta": insetMeta,
  });

  return (
    <Card
      {...cardProps}
      className={cardClassNames}
      innerClassNames={`relative overflow-hidden rounded ${innerClassName}`}
    >
      <Card.Content className="p-0">{preview}</Card.Content>

      {meta && (
        <Card.Content className="gui-file-card-meta">{meta}</Card.Content>
      )}

      {controls && <Card.Controls>{controls}</Card.Controls>}
      {children}
    </Card>
  );
}

FileCard.defaultProps = {
  insetMeta: false,
  meta: null,
  controls: null,
  preview: null,
};

export { FileCard };
