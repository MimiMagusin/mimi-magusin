import Script from "next/script";

const tallySrc =
  "https://tally.so/embed/LZXY7l?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1";

export function TallyForm() {
  return (
    <>
      <iframe
        data-tally-src={tallySrc}
        loading="lazy"
        width="100%"
        height="898"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        title="Zing mee op Koningsdag!"
        className="min-h-[898px] w-full rounded-[2rem] bg-white"
      />
      <Script id="tally-embed" strategy="afterInteractive">
        {`var d=document,w="https://tally.so/widgets/embed.js",v=function(){if(typeof Tally!=="undefined"){Tally.loadEmbeds();}else{d.querySelectorAll('iframe[data-tally-src]:not([src])').forEach(function(e){e.src=e.dataset.tallySrc;});}};if(typeof Tally!=="undefined"){v();}else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w;s.onload=v;s.onerror=v;d.body.appendChild(s);}`}
      </Script>
    </>
  );
}
