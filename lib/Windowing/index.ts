import { WindowingList } from './WindowingList';
import { WindowingItem } from './WindowingItem';
import { WindowingScroller } from './WindowingScroller';
import { Windowing, WindowingContext } from './Windowing';

// @ts-expect-error TS(2339): Property 'List' does not exist on type '{ ({ child... Remove this comment to see the full error message
Windowing.List = WindowingList;
// @ts-expect-error TS(2339): Property 'Item' does not exist on type '{ ({ child... Remove this comment to see the full error message
Windowing.Item = WindowingItem;
// @ts-expect-error TS(2339): Property 'Scroller' does not exist on type '{ ({ c... Remove this comment to see the full error message
Windowing.Scroller = WindowingScroller;
// @ts-expect-error TS(2339): Property 'Context' does not exist on type '{ ({ ch... Remove this comment to see the full error message
Windowing.Context = WindowingContext;

export { Windowing };
