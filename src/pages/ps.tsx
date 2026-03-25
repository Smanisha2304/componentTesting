import EmptyStateTest from "../component-test/core/EmptyStateTest"
import ErrorStateTest from "../component-test/core/ErrorStateTest"
import LayoutShellTest from "../component-test/core/LayoutShellTest"
import LoaderTest from "../component-test/core/LoaderTest"
import AvatarTest from "../component-test/data-display/AvatarTest"
import BadgeTest from "../component-test/data-display/BadgeTest"
import CardTest from "../component-test/data-display/CardTest"
import ClipboardTest from "../component-test/data-display/ClipboardTest"
import DataListTest from "../component-test/data-display/DataListTest"
import ImageTest from "../component-test/data-display/ImageTest"
import StatTest from "../component-test/data-display/StatTest"
// import TableComponentTest from "../component-test/data-display/TableTest""
import TagExploitTest from "../component-test/data-display/TagTest"
import AccordionTest from "../component-test/disclosure/AccordionTest"
import CarouselTest from "../component-test/disclosure/CarouselTest"
import CollapsibleTest from "../component-test/disclosure/CollapsibleTest"

const PS = () => {
  return (
    <>
      {/* Core Components */}
      <LoaderTest />
      <hr />
      <ErrorStateTest />
      <hr />
      <EmptyStateTest />  <hr />
      <LayoutShellTest />  <hr />

      {/* Display Components */}

      <BadgeTest />  <hr />
      <ClipboardTest />  <hr />
      <DataListTest />  <hr />
      <ImageTest />  <hr />
      <AvatarTest /> <hr />
      <StatTest />  <hr />
      <CardTest /> <hr />
      {/* <TableComponentTest /> <hr /> */}
      <TagExploitTest />  <hr />


      {/* Disclosure Components */}
      <AccordionTest />  <hr />
      <CarouselTest />  <hr />
      <CollapsibleTest />   <hr />

    </>
  )
}

export default PS