import { TallyFormEmbed } from "@/components/tally-form-embed";

const tallySrc =
  "https://tally.so/embed/LZXY7l?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1";

export function TallyForm() {
  return (
    <TallyFormEmbed
      src={tallySrc}
      title="Zing mee op Koningsdag!"
      minHeight={898}
      className="min-h-[898px] rounded-[2rem]"
    />
  );
}
