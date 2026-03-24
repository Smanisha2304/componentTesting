import EmptyStateTest from "../component-test/core/EmptyStateTest"
import ErrorStateTest from "../component-test/core/ErrorStateTest"
import LayoutShellTest from "../component-test/core/LayoutShellTest"
import LoaderTest from "../component-test/core/LoaderTest"
import BadgeTest from "../component-test/data-display/BadgeTest"
import ClipboardTest from "../component-test/data-display/ClipboardTest"
import DataListTest from "../component-test/data-display/DataListTest"
import ImageTest from "../component-test/data-display/ImageTest"
import StatTest from "../component-test/data-display/StatTest"
// import TableComponentTest from "../component-test/data-display/TableTest"
import TagExploitTest from "../component-test/data-display/TagTest"
import AccordionTest from "../component-test/disclosure/AccordionTest"
import CarouselTest from "../component-test/disclosure/CarouselTest"
import CollapsibleTest from "../component-test/disclosure/CollapsibleTest"

const PS = () => {
  return (
    <>
      {/* Core Components */}
      <LoaderTest />
      <ErrorStateTest />
      <EmptyStateTest />
      <LayoutShellTest />

      {/* Display Components */}
   
      <BadgeTest/>
      <ClipboardTest />
      <DataListTest/>
      <ImageTest/>
      <StatTest/>
      {/* <TableComponentTest/> */}
      <TagExploitTest/>


      {/* Disclosure Components */}
      <AccordionTest />
      <CarouselTest />
      <CollapsibleTest /> 
    </>
  )
}

export default PS