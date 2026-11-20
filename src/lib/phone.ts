function digitsOnly(value: string) {
  return value.replace(/\D/g, "");
}

/** Десять цифр номера без кода страны. */
export function nationalDigits(value: string) {
  const plus = value.indexOf("+");
  if (plus >= 0) {
    const beforePlus = digitsOnly(value.slice(0, plus));
    const afterPlus = digitsOnly(value.slice(plus + 1));
    const rest = afterPlus.startsWith("7") ? afterPlus.slice(1) : afterPlus;
    return `${beforePlus}${rest}`.slice(0, 10);
  }

  let digits = digitsOnly(value);
  if (digits === "7" || digits === "8") return "";
  if (digits.startsWith("8")) digits = `7${digits.slice(1)}`;
  if (digits.startsWith("7") && digits.length > 10) return digits.slice(1, 11);
  return digits.slice(0, 10);
}

export function formatNational(national: string) {
  const digits = national.slice(0, 10);
  if (!digits) return "";

  let formatted = `+7 (${digits.slice(0, Math.min(3, digits.length))}`;
  if (digits.length < 3) return formatted;

  formatted += ")";
  if (digits.length === 3) return formatted;

  formatted += ` ${digits.slice(3, Math.min(6, digits.length))}`;
  if (digits.length <= 6) return formatted;

  formatted += `-${digits.slice(6, Math.min(8, digits.length))}`;
  if (digits.length <= 8) return formatted;

  return `${formatted}-${digits.slice(8, 10)}`;
}

function caretAfterNationalDigits(formatted: string, count: number) {
  if (!formatted) return 0;
  if (count <= 0) return formatted.length;

  let seen = 0;
  let skippedCountry = false;
  for (let index = 0; index < formatted.length; index += 1) {
    if (!/\d/.test(formatted[index] ?? "")) continue;
    if (!skippedCountry) {
      skippedCountry = true;
      continue;
    }
    seen += 1;
    if (seen === count) {
      const next = formatted[index + 1];
      return next === ")" ? index + 2 : index + 1;
    }
  }
  return formatted.length;
}

function nationalDigitsBefore(value: string, cursor: number) {
  const plus = value.indexOf("+");
  if (plus === -1 || cursor <= plus) return digitsOnly(value.slice(0, cursor)).length;

  const beforePlus = digitsOnly(value.slice(0, plus));
  const after = digitsOnly(value.slice(plus + 1, cursor));
  const country = after.startsWith("7") || after.startsWith("8") ? 1 : 0;
  return beforePlus.length + Math.max(0, after.length - country);
}

/**
 * Собирает ввод в маску +7 (XXX) XXX-XX-XX.
 * Курсор остаётся у той цифры, которую только что набрали или стёрли.
 */
export function maskPhone(raw: string, previous: string, cursor: number) {
  const previousNational = nationalDigits(previous);
  let national = nationalDigits(raw);
  let before = nationalDigitsBefore(raw, cursor);

  const removedMaskChar =
    digitsOnly(raw) === digitsOnly(previous) && raw.length < previous.length;

  if (removedMaskChar && previousNational.length > 0) {
    if (before === 0) {
      national = previousNational;
    } else {
      const dropAt = before - 1;
      national =
        previousNational.slice(0, dropAt) + previousNational.slice(dropAt + 1);
      before = dropAt;
    }
  }

  const typedCountryOnly =
    national.length === 0 && /^[78]$/.test(digitsOnly(raw));
  const value = national ? formatNational(national) : typedCountryOnly ? "+7" : "";

  before = Math.min(before, national.length);
  return {
    value,
    caret: value ? caretAfterNationalDigits(value, before) : 0,
  };
}
