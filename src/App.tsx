import * as React from "react";
import {
  makeStyles,
  Button,
  Link,
  Tooltip,
  Spinner,
  tokens,
  buttonClassNames,
  useTimeout,
} from "@fluentui/react-components";
import {
  bundleIcon,
  CalendarMonthFilled,
  CalendarMonthRegular,
  CheckmarkFilled,
} from "@fluentui/react-icons";

const CalendarMonth = bundleIcon(CalendarMonthFilled, CalendarMonthRegular);

const useStyles = makeStyles({
  page: {
    display: "flex",
    flexDirection: "column",
    rowGap: "40px",
    padding: "32px",
    fontFamily: tokens.fontFamilyBase,
  },
  section: {
    display: "flex",
    flexDirection: "column",
    rowGap: "12px",
  },
  sectionTitle: {
    fontSize: tokens.fontSizeBase400,
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorNeutralForeground1,
    margin: 0,
  },
  row: {
    columnGap: "15px",
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    rowGap: "10px",
  },
  column: {
    display: "flex",
    flexDirection: "column",
    rowGap: "15px",
  },
  longText: {
    width: "280px",
  },
  buttonNonInteractive: {
    backgroundColor: tokens.colorNeutralBackground1,
    border: `${tokens.strokeWidthThin} solid ${tokens.colorNeutralStroke1}`,
    color: tokens.colorNeutralForeground1,
    cursor: "default",
    pointerEvents: "none",
    [`& .${buttonClassNames.icon}`]: {
      color: tokens.colorStatusSuccessForeground1,
    },
  },
});

type LoadingState = "initial" | "loading" | "loaded";

const Appearance = () => {
  const styles = useStyles();
  return (
    <div className={styles.section}>
      <h2 className={styles.sectionTitle}>Appearance</h2>
      <div className={styles.row}>
        <Button icon={<CalendarMonthRegular />}>Default</Button>
        <Button appearance="primary" icon={<CalendarMonthRegular />}>Primary</Button>
        <Button appearance="outline" icon={<CalendarMonth />}>Outline</Button>
        <Button appearance="subtle" icon={<CalendarMonth />}>Subtle</Button>
        <Button appearance="transparent" icon={<CalendarMonth />}>Transparent</Button>
      </div>
    </div>
  );
};

const Disabled = () => {
  const styles = useStyles();
  return (
    <div className={styles.section}>
      <h2 className={styles.sectionTitle}>Disabled</h2>
      <div className={styles.column}>
        <div className={styles.row}>
          <Button>Enabled state</Button>
          <Button disabled>Disabled state</Button>
          <Button disabledFocusable>Disabled focusable state</Button>
        </div>
        <div className={styles.row}>
          <Button appearance="primary">Enabled state</Button>
          <Button appearance="primary" disabled>Disabled state</Button>
          <Button appearance="primary" disabledFocusable>Disabled focusable state</Button>
        </div>
      </div>
    </div>
  );
};

const Icon = () => {
  const styles = useStyles();
  return (
    <div className={styles.section}>
      <h2 className={styles.sectionTitle}>Icon</h2>
      <div className={styles.row}>
        <Button icon={<CalendarMonthRegular />}>With calendar icon before contents</Button>
        <Button icon={<CalendarMonthRegular />} iconPosition="after">With calendar icon after contents</Button>
        <Tooltip content="With calendar icon only" relationship="label">
          <Button icon={<CalendarMonthRegular />} />
        </Tooltip>
      </div>
    </div>
  );
};

const Loading = () => {
  const styles = useStyles();
  const [loadingState, setLoadingState] = React.useState<LoadingState>("initial");
  const [setTimeout, cancelTimeout] = useTimeout();

  const onButtonClick = () => {
    setLoadingState("loading");
    setTimeout(() => setLoadingState("loaded"), 5000);
  };

  const buttonContent =
    loadingState === "loading" ? "Loading"
    : loadingState === "loaded" ? "Loaded"
    : "Start loading";

  const buttonIcon =
    loadingState === "loading" ? <Spinner size="tiny" />
    : loadingState === "loaded" ? <CheckmarkFilled />
    : null;

  return (
    <div className={styles.section}>
      <h2 className={styles.sectionTitle}>Loading</h2>
      <div className={styles.row}>
        <Button
          className={loadingState !== "initial" ? styles.buttonNonInteractive : undefined}
          disabledFocusable={loadingState !== "initial"}
          icon={buttonIcon}
          onClick={onButtonClick}
        >
          {buttonContent}
        </Button>
        <Button onClick={() => { cancelTimeout(); setLoadingState("initial"); }}>
          Reset loading state
        </Button>
      </div>
    </div>
  );
};

const Shape = () => {
  const styles = useStyles();
  return (
    <div className={styles.section}>
      <h2 className={styles.sectionTitle}>Shape</h2>
      <div className={styles.row}>
        <Button>Rounded</Button>
        <Button shape="circular">Circular</Button>
        <Button shape="square">Square</Button>
      </div>
    </div>
  );
};

const Size = () => {
  const styles = useStyles();
  return (
    <div className={styles.section}>
      <h2 className={styles.sectionTitle}>Size</h2>
      <div className={styles.column}>
        <div className={styles.row}>
          <Button size="small">Small</Button>
          <Button size="small" icon={<CalendarMonthRegular />}>Small with calendar icon</Button>
          <Tooltip content="Small with calendar icon only" relationship="label">
            <Button size="small" icon={<CalendarMonthRegular />} />
          </Tooltip>
        </div>
        <div className={styles.row}>
          <Button>Medium</Button>
          <Button icon={<CalendarMonthRegular />}>Medium with calendar icon</Button>
          <Tooltip content="Medium with calendar icon only" relationship="label">
            <Button icon={<CalendarMonthRegular />} />
          </Tooltip>
        </div>
        <div className={styles.row}>
          <Button size="large">Large</Button>
          <Button size="large" icon={<CalendarMonthRegular />}>Large with calendar icon</Button>
          <Tooltip content="Large with calendar icon only" relationship="label">
            <Button size="large" icon={<CalendarMonthRegular />} />
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

const WithLongText = () => {
  const styles = useStyles();
  return (
    <div className={styles.section}>
      <h2 className={styles.sectionTitle}>With long text</h2>
      <div className={styles.row}>
        <Button>Short text</Button>
        <Button className={styles.longText}>
          Long text wraps after it hits the max width of the component
        </Button>
      </div>
    </div>
  );
};

const ShowLink = () => {
  const styles = useStyles();
  return (
    <div className={styles.section}>
      <h2 className={styles.sectionTitle}>Link</h2>
      <div className={styles.column}>
        <div className={styles.row}>
          <Link href="https://www.microsoft.com">Default link</Link>
          <Link href="https://www.microsoft.com" appearance="subtle">Subtle link</Link>
          <Link>Link without href renders as a button</Link>
        </div>
        <div className={styles.row}>
          <Link href="https://www.microsoft.com" disabled>Disabled link</Link>
          <Link href="https://www.microsoft.com" inline>
            Inline link used within a sentence of text
          </Link>
        </div>
      </div>
    </div>
  );
};

export default () => {
  const styles = useStyles();
  return (
    <div className={styles.page}>
      <Appearance />
      <Disabled />
      <Icon />
      <Loading />
      <Shape />
      <Size />
      <WithLongText />
      <ShowLink />
    </div>
  );
};
