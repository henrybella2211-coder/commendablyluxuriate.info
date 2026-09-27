import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import { getArticle } from "@/lib/articles";

const article = getArticle("why-experienced-vapers-choose-lower-nicotine-strengths")!;

export const metadata: Metadata = {
  title: article.title,
  description: article.excerpt,
  alternates: { canonical: `/guides/${article.slug}` },
  openGraph: {
    title: article.title,
    description: article.excerpt,
    type: "article",
  },
};

export default function Page() {
  return (
    <ArticleLayout article={article}>
      <p>
        Ask a newer vaper what strength they started on and the conversation
        tends to move in one direction: could they have gone higher. Nicotine
        salts made higher strengths comfortable to inhale in a way freebase
        e-liquid rarely was, and the early weeks after switching from smoking
        often reward whatever gets the habit to stick. Spend longer around
        vaping forums, retailers and long-time vapers, though, and a quieter
        pattern turns up among people who have been vaping for a year or more:
        a fair number of them have moved down in strength, not up. This
        isn&apos;t a recommendation that a lower strength suits everyone, and
        nicotine needs vary a great deal from person to person. It&apos;s an
        editorial look at why the move happens for some experienced vapers,
        and why the reasons tend to look different from what people usually
        assume.
      </p>

      <h2>The strength that got you started isn&apos;t always the one that keeps you there</h2>
      <p>
        Most people arrive at their first nic salt strength under pressure,
        in the practical sense of needing a cigarette substitute to actually
        work straight away. A heavier smoker switching over often reaches for
        20mg because anything less risks the whole attempt failing in the
        first week. That&apos;s a sensible, cautious starting point, but it&apos;s
        chosen to solve a problem specific to the first few weeks, not a
        permanent setting. Once someone is a year or more into vaping, the
        original problem, replacing acute cigarette cravings fast, has
        usually already been solved. What&apos;s left is a settled daily habit,
        and settled habits don&apos;t necessarily need the same strength that
        got them established in the first place.
      </p>

      <h2>Overall consumption tends to shift, not just the number on the bottle</h2>
      <p>
        It&apos;s worth separating strength from total nicotine intake,
        because the two don&apos;t move together in the way people assume.
        Newer vapers often puff in short, deliberate bursts when a craving
        hits, closer to how a cigarette was used. Longer-term vapers more
        often settle into a steadier, more ambient pattern of shorter draws
        spread across the day. That shift in rhythm means a strength that
        felt right for occasional, concentrated use can end up delivering
        more nicotine than intended once it&apos;s paired with a habit
        that&apos;s simply more frequent. For some experienced vapers, dropping
        from 20mg or 10mg down to something like 5mg isn&apos;t a reduction in
        satisfaction so much as a correction, bringing overall intake back
        toward where it was rather than letting a more frequent habit
        compound against an unchanged strength.
      </p>

      <div className="relative w-full aspect-[4/5] my-12 -mx-2 sm:mx-0">
        <Image
          src="/images/eliquid-bottle-and-pod-device.jpg"
          alt="A 10ml nic salt e-liquid bottle showing its nicotine strength on the label, standing next to a pod vape device"
          fill
          sizes="(min-width: 640px) 42rem, 100vw"
          className="object-cover"
        />
      </div>

      <h2>A gentler throat hit, not a lesser one</h2>
      <p>
        Nicotine salts are generally described as giving a smoother throat
        hit than freebase e-liquid at an equivalent strength, which is a
        widely stated formulation characteristic rather than anything we&apos;d
        frame as a health claim. That smoothness is usually presented as the
        headline reason nic salts suit higher strengths so well in the first
        place. But the same logic runs the other way for vapers who have
        started to find even a well-formulated 20mg or 10mg salt slightly
        sharper than they&apos;d like on the throat. Moving to 5mg doesn&apos;t
        change the formulation, but it does soften the sensation further
        still, and for someone who no longer needs the stronger hit to feel
        satisfied, that gentler draw can simply become the more pleasant one
        to reach for, day after day.
      </p>

      <h2>Pairing with larger-capacity devices used more often</h2>
      <p>
        There&apos;s a device side to this too. Our piece on{" "}
        <Link href="/guides/owning-more-than-one-vape-kit">
          why some vapers end up owning more than one kit
        </Link>{" "}
        touches on how a larger-capacity device tends to get reached for at
        home, where longer, more relaxed sessions are the norm rather than
        the exception. A bigger tank or pod holding more e-liquid naturally
        invites more frequent, lower-pressure use than a compact device kept
        for the occasional top-up between meetings. Pair that kind of
        device with the higher strengths chosen for compact, occasional use,
        and the maths stops adding up the way it used to. A number of
        experienced vapers we&apos;ve seen discuss this settle on a lower
        strength specifically because their main device has become the
        larger, more-used one, not the smaller, less-used one, and the
        strength that made sense for the second scenario stopped making
        sense for the first.
      </p>

      <h2>Where a strength like 5mg fits in practice</h2>
      <p>
        UK nic salt ranges are typically sold across 5mg, 10mg and 20mg, the
        regulatory ceiling for e-liquid nicotine strength in the UK, and
        retailers generally carry a narrower flavour selection at the lowest
        strength than at the top end, simply because fewer buyers start
        there. Elux&apos;s Legend nic salt range, for instance, spans roughly
        fifty flavours at 10mg and 20mg but closer to twenty at 5mg
        specifically, sold in the standard 10ml bottle at 50/50 PG/VG and
        priced somewhere around £2.49 a bottle depending on retailer. If
        you&apos;re an experienced vaper curious about trying a lower
        strength without committing to a whole new flavour lineup, {" "}
        <a
          href="https://localsupplies.co.uk/collections/elux-nic-salts"
          target="_blank"
          rel="noopener noreferrer"
        >
          Elux vape liquid 5mg
        </a>{" "}
        is one of the more commonly stocked entry points into that lower
        band, alongside the same range&apos;s 10mg and 20mg bottles for
        anyone who decides the drop doesn&apos;t suit them after all.
      </p>

      <h2>This is an observation, not a recommendation</h2>
      <p>
        None of this is an argument that lower strengths are objectively
        better, or that every experienced vaper ends up there eventually.
        Plenty of long-term vapers stay perfectly happy on 10mg or 20mg
        indefinitely, and for some people a lower strength simply means
        vaping more to get the same satisfaction, which defeats the point
        entirely. Nicotine needs are genuinely individual, shaped by how
        much someone smoked before switching, how often they vape now, and
        plenty that has nothing to do with either. If you&apos;ve noticed
        yourself reaching for your device more often than you used to, or
        finding your current strength a little sharper than it once felt,
        that&apos;s worth noticing. What you do with the observation is, as
        ever, a personal call rather than a rule this site is in a position
        to hand down.
      </p>
      <p>
        It&apos;s also worth reading this alongside our wider look at{" "}
        <Link href="/guides/what-makes-a-vape-kit-feel-premium">
          what makes a vape kit feel considered rather than disposable
        </Link>
        , because strength and hardware tend to get chosen together in
        practice, even when they&apos;re discussed separately. A habit that
        has settled into something steadier and more frequent often changes
        both at once: the device someone reaches for, and the strength that
        actually suits it.
      </p>
    </ArticleLayout>
  );
}
