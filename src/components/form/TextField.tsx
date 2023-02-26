import { Dispatch, SetStateAction } from "react";

type FieldType = "input" | "textarea" | "date";

type Props = {
  label: string;
  value: string;
  onChange: Dispatch<SetStateAction<any>>;
  fieldType?: FieldType;
};

export default function TextField({
  label,
  onChange,
  value,
  fieldType = "input",
}: Props) {
  return (
    <div className="form-control mb-2">
      <label className="text-white">{label}</label>
      {fieldType === "input" && (
        <input
          className="input w-full"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      )}

      {fieldType === "date" && (
        <input
          type="date"
          className="input w-full"
          value={value}
          onChange={(e) => onChange(new Date(e.target.value))}
        />
      )}

      {fieldType === "textarea" && (
        <textarea
          className="textarea w-full"
          rows={3}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
    </div>
  );
}
