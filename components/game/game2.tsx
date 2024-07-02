import clsx from "clsx";

const Game2 = ({ colorProps }: { colorProps: ColorState }) => {
  const { colorBg, colorOpacity, colorError } = { ...colorProps };
  return (
    <div
      className={clsx(
        colorError
          ? "border-4 border-red-500 rounded-lg"
          : "border-4 border-sky-200 rounded-3xl",
        `bg-${colorBg}-${colorOpacity}`,
        "h-[50vh] text-center",
      )}
    >
      Hello from 2 component
    </div>
  );
};

export default Game2;
