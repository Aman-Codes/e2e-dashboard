/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import CustomCard from "components/CustomCard";
import filterPipelines from "api/filterPipelines";
import useStyles from "./styles";

const HomePage = ({ location }) => {
  const [pipelines, setPipelines] = useState({
    manual: {},
    nightly: {},
  });
  const [pipelinesToDisplay, setPipelinesToDisplay] = useState({
    manual: location?.state?.pipelinesToDisplay?.manual ?? true,
    nightly: location?.state?.pipelinesToDisplay?.nightly ?? true,
  });
  const classes = useStyles();
  const { t } = useTranslation();
  useEffect(() => {
    setPipelines(filterPipelines());
  }, []);
  useEffect(() => {
    setPipelinesToDisplay({
      manual: location?.state?.pipelinesToDisplay?.manual ?? true,
      nightly: location?.state?.pipelinesToDisplay?.nightly ?? true,
    });
    setPipelines(filterPipelines());
  }, [JSON.stringify(location?.state?.pipelinesToDisplay)]);
  return (
    <>
      <div className={classes.flex}>
        {pipelinesToDisplay.nightly &&
          pipelines &&
          pipelines.nightly &&
          Object.keys(pipelines.nightly).map((key) => (
            <CustomCard
              data={pipelines.nightly[key]}
              key={pipelines.nightly[key]?.id}
              category="nightly-runs"
            />
          ))}
        {pipelinesToDisplay.manual &&
          pipelines &&
          pipelines.manual &&
          Object.keys(pipelines.manual).map((key) => (
            <CustomCard
              data={pipelines.manual[key]}
              key={pipelines.manual[key]?.id}
              category="manual-runs"
            />
          ))}
      </div>
    </>
  );
};

export default HomePage;
