import { Panel, Heading, BodyLong, Button } from "@navikt/ds-react";
import PropTypes from "prop-types";
import ChatIkon from "../../../assets/ChatIkon";
import { formatToReadableDate } from "../../../utils/date";
import "./NotifikasjonPanel.css";

const NotifikasjonPanel = ({ tittel, dato }) => {
  return (
    <Panel className="notifikasjon-panel">
      <div
        style={{
          display: "grid",
          gridAutoFlow: "column",
          gap: "var(--navds-spacing-6)",
          alignItems: "center",
        }}
      >
        <ChatIkon />
        <div className="notifikasjon-panel-text-wrapper">
          <Heading className="notifikasjon-panel-tittel">{tittel}</Heading>
          <BodyLong className="notifikasjon-dato">{formatToReadableDate(dato)}</BodyLong>
        </div>
      </div>
      <div className="arkiver-button-container">
        <Button size={"small"} variant={"tertiary"} className="arkiver-button" aria-label="Tøm">
          Arkiver
        </Button>
      </div>
    </Panel>
  );
};
NotifikasjonPanel.prototypes = {
  tittel: PropTypes.string.isRequired,
  dato: PropTypes.string.isRequired,
};

export default NotifikasjonPanel;
