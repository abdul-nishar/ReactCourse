import { useContext } from "react";

import { ManagementContext } from "../store/management-context";
import EmptyContentArea from "../components/EmptyContentArea";
import CreateProject from "../components/CreateProject";
import ShowProject from "../components/ShowProject";

export default function CreateContent() {
  const { contentPageState } = useContext(ManagementContext);

  switch (contentPageState) {
    case 0:
      return <EmptyContentArea />;
    case undefined:
      return <CreateProject />;
    default:
      return <ShowProject />;
  }
}
