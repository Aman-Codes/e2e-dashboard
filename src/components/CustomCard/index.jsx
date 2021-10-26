import React from "react";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import PlayCircleFilled from "@material-ui/icons/PlayCircleFilled";
import GitHub from "@material-ui/icons/GitHub";
import Chip from "@material-ui/core/Chip";
import { Icon } from "litmus-ui";
import { Link } from "react-router-dom";
import CustomRadialChart from "components/CustomRadialChart";
import { timeDifferenceStrict } from "shared/helper";

const useStyles = makeStyles({
  root: {
    padding: "1rem 2rem",
    margin: "1rem 0",
    flex: "0 0 30%",
  },
  title: {
    fontSize: 14,
    color: "#0000008a",
  },
  flex: {
    display: "flex",
    justifyContent: "space-between",
  },
  timeline: {
    margin: "auto 0",
  },
});

const CustomCard = ({ data }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const d = new Date();
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          <PlayCircleFilled style={{ marginBottom: "-0.3rem" }} />
          {data?.readableName}
        </Typography>
        <Icon name="scheduleWorkflow" size="lg" color="black" /> {d.toString()}
        <br /> <br />
        <Chip label="litmuschaos/litmus-e2e" color="primary" />
        <div className={classes.flex}>
          <CustomRadialChart pass={5} fail={1} pending={1} />
          <Typography className={classes.timeline}>
            {`${timeDifferenceStrict(
              data?.workflow_runs?.updated_at,
              new Date()
            )} ago`}
          </Typography>
        </div>
      </CardContent>
      <CardActions>
        <PlayCircleFilled />
        <Link
          to={{
            pathname: "/workflows",
            state: { id: data?.id, readableName: data?.readableName },
          }}
          style={{ marginLeft: 0 }}
        >
          <Button size="small">{t("card.pipelineDetails")}</Button>
        </Link>
        <a
          href={data.html_url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "black", marginLeft: "auto" }}
        >
          <GitHub />
        </a>
      </CardActions>
    </Card>
  );
};

export default CustomCard;
