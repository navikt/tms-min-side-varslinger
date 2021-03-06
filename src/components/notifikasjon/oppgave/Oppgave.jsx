import { LinkPanel } from "@navikt/ds-react";
import { Task } from "@navikt/ds-icons";
import { formatToReadableDate } from "../../../utils/date";
import { loginserviceStepUpUrl } from "../../../api/urls";
import "./Oppgave.css";

const Oppgave = ({ props, isMasked }) => {
  const dato = props.forstBehandlet;
  const link = isMasked ? loginserviceStepUpUrl : props.link;
  const tittel = isMasked
    ? "Du har fått en oppgave, logg inn med høyere sikkerhetsnivå for å se oppgaven."
    : props.tekst;

  return (
    <LinkPanel className="notifikasjon-link-panel oppgave-link-panel" border={false} href={link}>
      <div
        style={{
          display: "grid",
          gridAutoFlow: "column",
          gap: "var(--navds-spacing-8)",
          alignItems: "center",
        }}
      >
        <div className="icon-container oppgave-icon-container">
          <Task className="oppgave-icon" fontSize="1.5rem" />
        </div>
        <div className="notifikasjon-link-panel-text-wrapper">
          <LinkPanel.Title className="notifikasjon-link-panel-tittel">{tittel}</LinkPanel.Title>
          <LinkPanel.Description className="notifikasjon-dato">{formatToReadableDate(dato)}</LinkPanel.Description>
        </div>
      </div>
    </LinkPanel>
  );
};

export default Oppgave;
