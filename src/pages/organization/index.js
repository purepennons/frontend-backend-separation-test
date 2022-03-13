import { Suspense } from "react";
import { useQuery } from "react-query";
import axios from "axios";

import Loading from "../../components/mixed/Loading";
import Card from "../../components/mixed/Card";
import LongInfo from "../../components/mixed/LongInfo";

function CardWithData() {
  const {
    data: { data },
    refetch,
  } = useQuery("organization/component-1/initial-data", () =>
    axios.get(
      "http://localhost:3010/components/organization/component-1/initial-data"
    )
  );

  return <Card name={data.name} page={data.page} onRetry={refetch} />;
}

function LongInfoWithData() {
  const {
    data: { data },
  } = useQuery("components/organization/component-2/initial-data", () =>
    axios.get(
      "http://localhost:3010/components/organization/component-2/initial-data"
    )
  );

  return <LongInfo name={data.name} page={data.page} content={data.content} />;
}

function Page() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <CardWithData suppressHydrationWarning />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <LongInfoWithData />
      </Suspense>
    </div>
  );
}

export default Page;
