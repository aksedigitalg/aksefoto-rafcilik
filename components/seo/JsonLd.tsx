/**
 * JSON-LD schema markup'i sayfaya ekleyen sunucu komponenti.
 * Birden fazla schema icin tek bir array veya tek bir obje gonderilebilir.
 */
interface JsonLdProps {
  data: object | object[];
}

export function JsonLd({ data }: JsonLdProps) {
  const items = Array.isArray(data) ? data : [data];
  return (
    <>
      {items.map((item, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}
