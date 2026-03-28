import Script from "next/script";

type TallyFormEmbedProps = {
  src: string;
  title: string;
  minHeight?: number;
  className?: string;
};

export function TallyFormEmbed({
  src,
  title,
  minHeight = 820,
  className = "",
}: TallyFormEmbedProps) {
  return (
    <>
      <iframe
        data-tally-src={src}
        loading="lazy"
        width="100%"
        height={minHeight}
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        title={title}
        className={`w-full bg-white ${className}`.trim()}
      />
      <Script id="tally-embed" strategy="afterInteractive">
        {`var d=document,w="https://tally.so/widgets/embed.js",v=function(){if(typeof Tally!=="undefined"){Tally.loadEmbeds();}else{d.querySelectorAll('iframe[data-tally-src]:not([src])').forEach(function(e){e.src=e.dataset.tallySrc;});}};if(typeof Tally!=="undefined"){v();}else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w;s.onload=v;s.onerror=v;d.body.appendChild(s);}`}
      </Script>
    </>
  );
}
