"use client";

import useCallRecord from "@/hooks/useCallRecord";
import "./audioPlayer.scss";
import { useState } from "react";
import Loader from "../loader/Loader";

export default function AudioPlayer({ record, partnership_id }) {
  const [source, setSource] = useState("");
  const { data, error, isLoading } = useCallRecord(record, partnership_id);

  if (isLoading) return <Loader />;

  return (
    <div className="audio-player" onMouseEnter={(e) => setSource(data)}>
      <audio src={source} controls />
    </div>
  );
}
