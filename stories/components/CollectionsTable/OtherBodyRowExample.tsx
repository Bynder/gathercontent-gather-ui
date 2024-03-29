import React from "react";
import { CollectionsTable, Avatar } from "../../../lib";

const OtherBodyRowExample = () => (
  <CollectionsTable.Row>
    <CollectionsTable.Cell allowOverflow>
      <div className="gui-text-overflow-ellipsis">
        <CollectionsTable.CellContent>
          <h3 className="gui-collections-table__row-title text-overflow-ellipsis">
            <a href="/">A sheep in Iceland</a>
          </h3>
        </CollectionsTable.CellContent>
      </div>
    </CollectionsTable.Cell>
    <CollectionsTable.Cell className="gui-hide-small">
      <div className="gui-text-overflow-ellipsis">Today</div>
    </CollectionsTable.Cell>
    <CollectionsTable.Cell className="gui-hide-small">
      <div className="gui-text-overflow-ellipsis">1 MB</div>
    </CollectionsTable.Cell>
    <CollectionsTable.Cell className="gui-hide-small">
      <div className="gui-text-overflow-ellipsis">
        <Avatar
          name="Angus Edwardson"
          initials="AE"
          // @ts-expect-error
          email="example@gmail.com"
        />
      </div>
    </CollectionsTable.Cell>
  </CollectionsTable.Row>
);

export default OtherBodyRowExample;
