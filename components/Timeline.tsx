"use client";

import { useMemo } from "react";
import type { ArticleSummary, PressItem } from "@/lib/sanity/queries";

type TimelineProps = {
  articles: ArticleSummary[];
  press: PressItem[];
};

type TimelineItem = {
  id: string;
  date: string;
  year: string;
  month: string;
  type: "article" | "press";
  title: string;
  description?: string;
  href: string;
  publication?: string;
};

export default function Timeline({ articles, press }: TimelineProps) {
  const items = useMemo<TimelineItem[]>(() => {
    const articleItems: TimelineItem[] = articles
      .filter((article) => article.publishedAt)
      .map((article) => ({
        id: `article-${article._id}`,
        date: article.publishedAt,
        year: new Date(article.publishedAt).getFullYear().toString(),
        month: new Date(article.publishedAt).toLocaleDateString("en-US", {
          month: "short",
        }),
        type: "article",
        title: article.title,
        description: article.standfirst,
        href: `/writing/${article.slug}`,
        publication: article.originallyPublished?.publication?.name,
      }));

    const pressItems: TimelineItem[] = press
      .filter((item) => item.publishedAt && item.url)
      .map((item) => ({
        id: `press-${item._id}`,
        date: item.publishedAt as string,
        year: new Date(item.publishedAt as string)
          .getFullYear()
          .toString(),
        month: new Date(item.publishedAt as string).toLocaleDateString(
          "en-US",
          {
            month: "short",
          }
        ),
        type: "press",
        title: item.headline,
        description: item.excerpt,
        href: item.url,
        publication: item.publication?.name,
      }));

    return [...articleItems, ...pressItems].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }, [articles, press]);

  if (items.length === 0) {
    return null;
  }

  return (
    <section className="timeline-section" aria-labelledby="timeline-heading">
      <div className="wrap">
        <div className="timeline-section__header">
          <div>
            <p className="timeline-section__eyebrow">
              Selected work & coverage
            </p>

            <h2 id="timeline-heading" className="timeline-section__title">
              In the timeline
            </h2>
          </div>

          <p className="timeline-section__intro">
            Articles written by Dr. Nikhil Agarwal and selected press coverage,
            arranged chronologically.
          </p>
        </div>
      </div>

      <div className="timeline-track-wrap">
        <div className="timeline-track">
          {items.map((item, index) => (
            <article
              key={item.id}
              className="timeline-card"
              style={{ ["--timeline-index" as string]: index }}
            >
              <div className="timeline-card__date">
                <span>{item.month}</span>
                <strong>{item.year}</strong>
              </div>

              <div className="timeline-card__stem" aria-hidden="true">
                <span />
              </div>

              <div className="timeline-card__content">
                <p className="timeline-card__type">
                  {item.type === "article" ? "Writing" : "Press"}
                  {item.publication ? ` · ${item.publication}` : ""}
                </p>

                <h3 className="timeline-card__title">
                  <a
                    href={item.href}
                    target={item.type === "press" ? "_blank" : undefined}
                    rel={
                      item.type === "press"
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    {item.title}
                  </a>
                </h3>

                {item.description && (
                  <p className="timeline-card__description">
                    {item.description}
                  </p>
                )}

                <a
                  href={item.href}
                  className="timeline-card__link"
                  target={item.type === "press" ? "_blank" : undefined}
                  rel={
                    item.type === "press"
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  {item.type === "article"
                    ? "Read article"
                    : "Read coverage"}{" "}
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}