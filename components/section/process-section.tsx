import ProcessGroup from "@/components/shared/groups/process-group";
import Paragraph from "@/components/shared/paragraph";

const ProcessSection = () => {
  return (
    <div className="w-full space-y-4">
      <Paragraph title="My Process">
        <p>
          A step-by-step approach to building impactful and scalable digital
          solutions. Combining my background in{" "}
          <span className="text-foreground font-medium">digital marketing</span> and{" "}
          <span className="text-foreground font-medium">full-stack development</span>,
          I use the{" "}
          <span className="text-foreground font-medium">4D</span> method to ensure
          every project is both functional and growth-driven.
        </p>
      </Paragraph>

      <ProcessGroup />
    </div>
  );
};

export default ProcessSection;
