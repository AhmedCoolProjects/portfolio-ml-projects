import { Paper } from "@mui/material";

type props = {
  char: string;
};
export function PaperDisplay(props: props) {
  const { char } = props;
  return (
    <Paper elevation={3} className="items-center h-full  flex flex-col ">
      <div className="border-solid border-black border-2 w-[400px] h-[400px] items-center flex justify-center">
        <h1 className="font-bold text-9xl">{char}</h1>
      </div>
    </Paper>
  );
}
