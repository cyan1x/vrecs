import { VTuber } from "@/data/vtubers";

export function VTuberAvatar(props: { vtuber: VTuber }) {
  return (
    <div className="rounded-[50%] border-[3.5px] border-double border-[transparent] bg-[linear-gradient(170deg,_rgba(223,_249,_255,_0.95),_rgba(236,_227,_250,_0.95)),_radial-gradient(circle_farthest-corner_at_0.2%_0.5%,_rgba(123,_11,_208,_0.3)_3.7%,_rgba(54,_214,_235,_0.4)_92.7%)] bg-origin-border">
      <div
        title={props.vtuber.name}
        style={
          {
            backgroundImage: `url(/${props.vtuber.imgName})`,
          } as React.CSSProperties
        }
        className={`box-content max-h-full min-h-[7.5rem] min-w-[7.5rem] max-w-[7.5rem] rounded-[50%] bg-contain bg-[center_center] bg-no-repeat`}
      ></div>
    </div>
  );
}
