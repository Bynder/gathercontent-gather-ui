import React from "react";
import { Layout as LayoutComponent } from "../../lib";
import { Sidebar } from "../../lib/src/components/sidebar/Sidebar.stories";

export default {
  title: "Legacy/Layout",
  component: LayoutComponent,
  args: {
    isOpen: false,
  },
};

export const Layout = ({ isOpen }: any) => {
  return (
    <LayoutComponent>
      <style>{"#root { padding: 0 }"}</style>
      <LayoutComponent.Header className="bg-red-primary h-20 border-8 border-solid border-red-30">
        Header
      </LayoutComponent.Header>

      <LayoutComponent.Section className="h-full flex flex-row">
        <LayoutComponent.Main className="w-3/4">
          <LayoutComponent.SubHeader
            className="bg-blue-primary h-10 border-8 border-solid border-blue-30"
            animatableProperties={{ width: isOpen ? "75%" : "100%" }}
          >
            SubHeader
          </LayoutComponent.SubHeader>
          <LayoutComponent.Body className="bg-green-primary border-8 border-solid border-green-30">
            Body
          </LayoutComponent.Body>
          {/* @ts-expect-error TS(2322): Type '{ children: string; className: string; anima... Remove this comment to see the full error message */}
          <LayoutComponent.Footer
            className="bg-yellow-primary h-10 border-8 border-solid border-yellow-30"
            animatableProperties={{ width: isOpen ? "75%" : "100%" }}
          >
            Footer
          </LayoutComponent.Footer>
          {/* @ts-expect-error TS(2786): 'LayoutComponent.OverlaySidebar' cannot be used as... Remove this comment to see the full error message */}
          <LayoutComponent.OverlaySidebar className="top-0" isOpen={isOpen}>
            <Sidebar />
          </LayoutComponent.OverlaySidebar>
        </LayoutComponent.Main>
        <LayoutComponent.InlineSidebar className="w-1/4 bg-purple-primary border-8 border-solid border-purple-30">
          Inline Sidebar
        </LayoutComponent.InlineSidebar>
      </LayoutComponent.Section>
    </LayoutComponent>
  );
};
