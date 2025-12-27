import { useEffect, useState } from "react";
import { storyblok } from "../services/storyblok";

export default function StoryblokTest() {
  const [story, setStory] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadStory() {
      try {
        const { data } = await storyblok.get("cdn/stories/home", {
          version: "draft",
        });

        setStory(data.story);
      } catch (err) {
        console.error(err);
        setError("Erro ao conectar com o Storyblok");
      }
    }

    loadStory();
  }, []);

  if (error) {
    return (
      <div style={{ padding: 20 }}>
        <h2>❌ Erro</h2>
        <p>{error}</p>
      </div>
    );
  }

  if (!story) {
    return (
      <div style={{ padding: 20 }}>
        <p>🔄 Carregando conteúdo do Storyblok...</p>
      </div>
    );
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>✅ Storyblok conectado com sucesso</h2>

      <p>
        <strong>Story name:</strong> {story.name}
      </p>

      <pre
        style={{
          marginTop: 20,
          padding: 16,
          background: "#111",
          color: "#0f0",
          maxHeight: 400,
          overflow: "auto",
          fontSize: 12,
        }}
      >
        {JSON.stringify(story.content, null, 2)}
      </pre>
    </div>
  );
}


