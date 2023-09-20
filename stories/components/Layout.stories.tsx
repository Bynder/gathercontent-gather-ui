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

export function Layout({ isOpen }: any) {
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
          <LayoutComponent.Footer
            className="bg-yellow-primary h-10 border-8 border-solid border-yellow-30"
            animatableProperties={{ width: isOpen ? "75%" : "100%" }}
          >
            Footer
          </LayoutComponent.Footer>
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
}
