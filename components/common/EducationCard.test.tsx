import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { EducationCard } from "./EducationCard";

describe("EducationCard", () => {
  it("renders the title, issuer and date on the degree variant", () => {
    render(
      <EducationCard
        variant="degree"
        icon="🎓"
        title="Computer Engineer"
        issuer="IUT Agro-Industrial"
        date="December 2013"
      />
    );

    expect(
      screen.getByRole("heading", { name: "Computer Engineer" })
    ).toBeInTheDocument();
    expect(screen.getByText("IUT Agro-Industrial")).toBeInTheDocument();
    expect(screen.getByText("December 2013")).toBeInTheDocument();
  });

  it("combines issuer and date in a single line on the diploma variant", () => {
    render(
      <EducationCard
        variant="diploma"
        icon="📜"
        title="High School Diploma"
        issuer="Monseñor Sanmiguel"
        date="2005"
      />
    );

    expect(
      screen.getByText("Monseñor Sanmiguel · 2005")
    ).toBeInTheDocument();
  });

  it("hides the decorative icon from assistive technology", () => {
    const { container } = render(
      <EducationCard
        variant="degree"
        icon="🎓"
        title="Title"
        issuer="Issuer"
        date="Date"
      />
    );

    const icon = container.querySelector('[aria-hidden="true"]');
    expect(icon).toHaveTextContent("🎓");
  });
});
