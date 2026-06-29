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
          <p className={styles.subtitle}>Reserve your spot via WhatsApp — all classes are 50 minutes.</p>
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
                        href={`https://wa.me/96171511101?text=Hi!%20I'd%20like%20to%20book%20the%20${encodeURIComponent(slot.name)}%20class%20at%20${row.time}.`}
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
