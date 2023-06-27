import { FolderRow } from './FolderRow';
import { FolderRowAction } from './FolderRowAction';
import { FolderRowActions } from './FolderRowActions';
import { FolderRowInner } from './FolderRowInner';
import { FolderRowName } from './FolderRowName';
import { FolderRowAside } from './FolderRowAside';
import { FolderRowCell } from './FolderRowCell';
import { FolderRowContents } from './FolderRowContents';

// @ts-expect-error TS(2339): Property 'Inner' does not exist on type 'typeof Fo... Remove this comment to see the full error message
FolderRow.Inner = FolderRowInner;
// @ts-expect-error TS(2339): Property 'Name' does not exist on type 'typeof Fol... Remove this comment to see the full error message
FolderRow.Name = FolderRowName;
// @ts-expect-error TS(2339): Property 'Aside' does not exist on type 'typeof Fo... Remove this comment to see the full error message
FolderRow.Aside = FolderRowAside;
// @ts-expect-error TS(2339): Property 'Cell' does not exist on type 'typeof Fol... Remove this comment to see the full error message
FolderRow.Cell = FolderRowCell;
// @ts-expect-error TS(2339): Property 'Contents' does not exist on type 'typeof... Remove this comment to see the full error message
FolderRow.Contents = FolderRowContents;
// @ts-expect-error TS(2339): Property 'Action' does not exist on type 'typeof F... Remove this comment to see the full error message
FolderRow.Action = FolderRowAction;
// @ts-expect-error TS(2339): Property 'Actions' does not exist on type 'typeof ... Remove this comment to see the full error message
FolderRow.Actions = FolderRowActions;

export { FolderRow };
