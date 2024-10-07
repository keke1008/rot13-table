export interface Props {
  origin: string;
  converted: string;
}

export const Pair = ({ origin, converted }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

        borderRadius: "0.3rem",
        boxShadow: "0 0 0.5rem 0.25rem rgba(0, 0, 0, 0.1)",
        paddingInline: "0.3rem",
        paddingBlock: "0.2rem",
      }}
    >
      <div>{origin}</div>
      <hr style={{ width: "1rem" }} />
      <div>{converted}</div>
    </div>
  );
};
