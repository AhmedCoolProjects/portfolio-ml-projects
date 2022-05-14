import { Button, Paper } from "@mui/material";
import { ProjectVersionsData } from "../../../types";

export function ProjectVersionCard(props: ProjectVersionsData) {
  const { description, link, title, version } = props;
  return (
    <Paper className="p-4 flex flex-col space-y-3" elevation={3}>
      <h1
        className="text-3xl font-semibold
      
      "
      >
        {title} - <span className="text-4xl">{version}</span>
      </h1>
      <h1 className="text-base px-4 text-opacity-80">{description}</h1>
      <Button
        variant="contained"
        target="_blank"
        rel="noopener noreferrer"
        href={link}
      >
        Check How I made it
      </Button>
    </Paper>
  );
}
