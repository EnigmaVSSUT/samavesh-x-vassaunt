import useEventTimelineStore from "@/lib/store/useEventTimelineStore";
import { useMediaQuery, Tabs, Tab, Typography } from "@mui/material";

const CategoryTabSelector = () => {
  const [category, setCategory] = useEventTimelineStore((state) => [
    state.category,
    state.setCategory,
  ]);
  // const theme = useTheme()
  const greaterThanLg = useMediaQuery((theme) => theme.breakpoints.up("lg"), {
    noSsr: true,
  });

  const handleChange = (e, v) => {
    setCategory(v);
  };

  return (
    <Tabs
      value={category}
      onChange={handleChange}
      variant="scrollable"
      scrollButtons
      allowScrollButtonsMobile
      sx={{
        width: "100%",
      }}
    >
      <Tab label={<Typography variant="ACH6">Technical</Typography>} />
      <Tab label={<Typography variant="ACH6">Cultural</Typography>} />
      <Tab label={<Typography variant="ACH6">Category</Typography>} />
    </Tabs>
  );
};

export default CategoryTabSelector;
