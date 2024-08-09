import Link from "next/link";
import { Card } from "../components/Card";
import { ExternalLink } from "../components/ExternalLink";

export default function Page() {
  return (
    <Card>
      <div className="flex flex-col gap-1">
        <p>
          Created by{" "}
          <ExternalLink href="https://github.com/cyan1x">Cyanix.</ExternalLink>
        </p>
        <p>
          Migrated from a simple, single-page Vue.js project to a statically
          generated Next.js website.
        </p>
        <p className="mt-3 text-center">
          <Link href="/">→ Home</Link>
        </p>
      </div>
    </Card>
  );
}
