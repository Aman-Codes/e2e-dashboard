import React, { useState, useEffect } from "react";
import CustomCard from "components/CustomCard";
import useStyles from "./styles";

const HomePage = ({ location, pipelineData }) => {
  const [pipelines, setPipelines] = useState(pipelineData);
  const [pipelinesToDisplay, setPipelinesToDisplay] = useState({
    manual: location?.state?.pipelinesToDisplay?.manual ?? true,
    nightly: location?.state?.pipelinesToDisplay?.nightly ?? true,
  });
  const classes = useStyles();
  useEffect(() => {
    console.log("called useEffect", pipelineData);
    setPipelines(pipelineData);
  }, [pipelineData]);
  useEffect(() => {
    setPipelinesToDisplay({
      manual: location?.state?.pipelinesToDisplay?.manual ?? true,
      nightly: location?.state?.pipelinesToDisplay?.nightly ?? true,
    });
    // const d = filterPipelines(pipelineData);
    // setPipelines(d);
    // console.log("updated state to", d);
  }, [JSON.stringify(location?.state?.pipelinesToDisplay)]);
  return (
    <div className={classes.flex}>
      {pipelinesToDisplay?.nightly && pipelinesToDisplay?.manual && (
        <CustomCard data={pipelines?.all} key="all" url="/all" />
      )}
      {pipelinesToDisplay.nightly &&
        pipelines?.nightly &&
        pipelines?.nightly?.map((pipeline) => (
          <CustomCard data={pipeline} key={pipeline?.id} />
        ))}
      {pipelinesToDisplay.manual &&
        pipelines?.manual &&
        pipelines?.manual?.map((pipeline) => (
          <CustomCard data={pipeline} key={pipeline?.id} />
        ))}
    </div>
  );
};

export default HomePage;
