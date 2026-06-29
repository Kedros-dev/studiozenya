import { Fragment } from "react";
import { motion } from "framer-motion";
import styles from "./Classes.module.css";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

type ClassEntry = { name: string; instructor: string } | null;

const SCHEDULE: { time: string; slots: ClassEntry[] }[] = [
  {
    time: "8:00",
    slots: [
      { name: "Level 1", instructor: "Ribal" },
      { name: "Level 2", instructor: "Ribal" },
      { name: "Level 1", instructor: "Ribal" },
      { name: "Level 2", instructor: "Ribal" },
      { name: "Level 1", instructor: "Ribal" },
      { name: "Mat Pilates", instructor: "Reem" },
    ],
  },
  {
    time: "9:00",
    slots: [
      { name: "Level 2", instructor: "Ribal" },
      { name: "Open Level", instructor: "Ribal" },
      { name: "Level 2", instructor: "Ribal" },
      { name: "Open Level", instructor: "Ribal" },
      { name: "Level 2", instructor: "Ribal" },
      { name: "Level 1", instructor: "Ribal" },
    ],
  },
  {
    time: "10:00",
    slots: [
      { name: "Open Level", instructor: "Ribal" },
      { name: "Open Level", instructor: "Ribal" },
      { name: "Open Level", instructor: "Ribal" },
      { name: "Open Level", instructor: "Ribal" },
      { name: "Open Level", instructor: "Ribal" },
      { name: "Level 2", instructor: "Ribal" },
    ],
  },
  {
    time: "11:00",
    slots: [
      { name: "Level 2", instructor: "Ribal" },
      { name: "Level 1", instructor: "Ribal" },
      { name: "Level 2", instructor: "Ribal" },
      { name: "Level 1", instructor: "Ribal" },
      { name: "Level 2", instructor: "Ribal" },
      null,
    ],
  },
  {
    time: "17:00",
    slots: [
      { name: "Open Level", instructor: "Ribal" },
      { name: "Open Level", instructor: "Reem" },
      { name: "Open Level", instructor: "Reem" },
      { name: "Open Level", instructor: "Chirine" },
      { name: "Open Level", instructor: "Reem" },
      null,
    ],
  },
  {
    time: "18:00",
    slots: [
      { name: "Mat Pilates", instructor: "Reem" },
      { name: "Sculpt", instructor: "Chirine" },
      { name: "Mat Pilates", instructor: "Reem" },
      { name: "Sculpt", instructor: "Chirine" },
      { name: "Mat Pilates", instructor: "Reem" },
      null,
    ],
  },
  {
    time: "19:00",
    slots: [
      { name: "Level 1", instructor: "Ribal" },
      { name: "Level 2", instructor: "Ribal" },
      { name: "Level 2", instructor: "Ribal" },
      { name: "Level 2", instructor: "Ribal" },
      { name: "Level 1", instructor: "Ribal" },
      null,
    ],
  },
  {
    time: "20:00",
    slots: [
      { name: "Level 2", instructor: "Ribal" },
      { name: "Level 1", instructor: "Ribal" },
      { name: "Level 1", instructor: "Ribal" },
      { name: "Level 1", instructor: "Ribal" },
      { name: "Level 2", instructor: "Ribal" },
      null,
    ],
  },
];

function classType(name: string): string {
  if (name === "Sculpt") return "sculpt";
  if (name === "Mat Pilates") return "matPilates";
  if (name === "Open Level") return "openLevel";
  if (name === "Level 1") return "level1";
  if (name === "Level 2") return "level2";
  return "openLevel";
}

export default function Classes() {
  return (
    <section id="classes" className={styles.classes}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className={styles.title}>Weekly <em>Schedule</em></h2>
          <p className={styles.subtitle}>All classes are 50 minutes. Tap any class to reserve via WhatsApp, or book online below.</p>
          <div className={styles.bookingBtns}>
            <a
              href="https://wa.me/96179077076"
              target="_blank"
              rel="noreferrer"
              className={styles.bookWa}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Book via WhatsApp
            </a>
            <a
              href="https://in.app.link/CLpOh4oky2b"
              target="_blank"
              rel="noreferrer"
              className={styles.bookOnline}
            >
              Book Online →
            </a>
          </div>
        </motion.div>

        <motion.div
          className={styles.tableWrap}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className={styles.table}>
            {/* Header row */}
            <div className={styles.timeCell} />
            {DAYS.map((d) => (
              <div key={d} className={styles.dayHeader}>{d}</div>
            ))}

            {/* Data rows */}
            {SCHEDULE.map((row) => (
              <Fragment key={row.time}>
                <div className={styles.timeCell}>{row.time}</div>
                {row.slots.map((slot, ci) => (
                  <div key={ci} className={styles.slotCell}>
                    {slot ? (
                      <a
                        href={`https://wa.me/96179077076?text=Hi!%20I'd%20like%20to%20book%20the%20${encodeURIComponent(slot.name)}%20class%20at%20${row.time}.`}
                        target="_blank"
                        rel="noreferrer"
                        className={`${styles.pill} ${styles[classType(slot.name)]}`}
                      >
                        <span className={styles.pillName}>{slot.name}</span>
                        <span className={styles.pillInstructor}>By {slot.instructor}</span>
                      </a>
                    ) : (
                      <div className={styles.empty} />
                    )}
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </motion.div>

        {/* Legend */}
        <motion.div
          className={styles.legend}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            { key: "level1", label: "Level 1" },
            { key: "level2", label: "Level 2" },
            { key: "openLevel", label: "Open Level" },
            { key: "matPilates", label: "Mat Pilates" },
            { key: "sculpt", label: "Sculpt" },
          ].map(({ key, label }) => (
            <div key={key} className={styles.legendItem}>
              <span className={`${styles.legendDot} ${styles[key]}`} />
              <span className={styles.legendLabel}>{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
