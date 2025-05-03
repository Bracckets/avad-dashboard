// updated React code with more doc sections
"use client";
import React, { useState } from "react";
import NavigationHeader from "./NavigationHeader";
import OverviewHeader from "./OverviewHeader";
import SearchSection from "./SearchSection";

const sections = [
  { id: "introduction", title: "Introduction" },
  { id: "features", title: "Features" },
  { id: "data-flow", title: "Data Flow" },
  { id: "components", title: "Components" },
  { id: "deployment", title: "Deployment" },
  { id: "adaptive-algorithm", title: "Adaptive Algorithm" },
  { id: "simulation-dashboard", title: "Simulation Dashboard" },
  { id: "testing-verification", title: "Testing & Verification" },
  { id: "customer-needs", title: "Customer Needs" },
  { id: "conclusion", title: "Conclusion" },
];

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("introduction");

  const renderSection = () => {
    switch (activeSection) {
      case "introduction":
        return (
          <section>
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="mb-4">
              The Adaptive Ventricular Assist Device (A-VAD) is an innovative
              biomedical system that responds to patient activity by adjusting
              blood flow in real-time. Designed for heart failure patients, the
              A-VAD improves mobility and independence by simulating natural
              cardiac rhythms through mechanical and electrical systems.
            </p>
            <p>
              Using a mock loop composed of a silicone heart, programmable
              gripper, and control sensors, the system not only supports
              patients but also serves as a platform for research and simulation
              in academic and clinical settings.
            </p>
          </section>
        );
      case "features":
        return (
          <section>
            <h2 className="text-2xl font-semibold mb-4">Features</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Real-time adaptive pump control using PID algorithm</li>
              <li>
                Integrated cloud architecture for monitoring and data storage
              </li>
              <li>
                Fully interactive simulation dashboard with offline capabilities
              </li>
              <li>
                Gimbal-supported free-motion mock loop for orientation-based
                testing
              </li>
              <li>
                Sensor network includes heart rate, flow rate, displacement, and
                accelerometer
              </li>
              <li>
                Remote access for clinicians and researchers via web interface
              </li>
            </ul>
          </section>
        );
      case "data-flow":
        return (
          <section>
            <h2 className="text-2xl font-semibold mb-4">Data Flow</h2>
            <p className="mb-4">
              Data originates from sensors embedded in the mock circulatory
              system and is processed by a Raspberry Pi. The Pi acts as the
              central controller, applying adaptive logic and streaming
              telemetry to the cloud.
            </p>
            <p>The pipeline includes:</p>
            <ul className="list-disc list-inside">
              <li>Raspberry Pi → AWS IoT Core</li>
              <li>IoT Core → Kinesis for ingestion and stream processing</li>
              <li>Kinesis → Lambda and S3 for storage and triggers</li>
              <li>Processed data served via AppSync → React Dashboard</li>
            </ul>
          </section>
        );
      case "components":
        return (
          <section>
            <h2 className="text-2xl font-semibold mb-4">Components</h2>
            <ul className="list-disc list-inside">
              <li>
                <strong>Mock Loop:</strong> Simulates human circulation using
                tanks, tubes, and a silicone heart
              </li>
              <li>
                <strong>Gripper Mechanism:</strong> Simulates systole and
                diastole using a programmable clamp
              </li>
              <li>
                <strong>Sensors:</strong> Measure real-time physiological and
                motion parameters
              </li>
              <li>
                <strong>Control System:</strong> Raspberry Pi with a PID
                controller and DC-DC converters
              </li>
              <li>
                <strong>Dashboard:</strong> Web UI built with React and Tailwind
                for data display and simulation
              </li>
              <li>
                <strong>Cloud Backend:</strong> AWS services for real-time data
                ingestion, processing, and storage
              </li>
            </ul>
          </section>
        );
      case "deployment":
        return (
          <section>
            <h2 className="text-2xl font-semibold mb-4">Deployment</h2>
            <p className="mb-4">
              The A-VAD prototype is deployed on a Raspberry Pi with connected
              sensors and actuators. Real-time telemetry is transmitted to the
              AWS cloud for analysis and visualization.
            </p>
            <p>Recommended improvements for deployment at scale include:</p>
            <ul className="list-disc list-inside">
              <li>
                Replacing wooden gimbal frame with aluminum or carbon fiber
              </li>
              <li>Upgrading to more powerful, multi-functional sensors</li>
              <li>
                Containerizing the dashboard and backend API for scalable
                hosting
              </li>
              <li>Using C++ for faster simulator application runtime</li>
            </ul>
          </section>
        );
      case "adaptive-algorithm":
        return (
          <section>
            <h2 className="text-2xl font-semibold mb-4">Adaptive Algorithm</h2>
            <p className="mb-4">
              The A-VAD uses a PID controller to adjust pump output based on
              real-time feedback. Sensor readings such as heart rate and body
              orientation are used to compute an error value, and the PID
              controller applies correction based on proportional, integral, and
              derivative terms.
            </p>
            <p>
              <code className="block my-2">
                u(t) = Kp * e(t) + Ki * ∫e(t)dt + Kd * de(t)/dt
              </code>
              This ensures accurate and responsive flow adjustments to simulate
              natural cardiovascular behavior.
            </p>
          </section>
        );
      case "simulation-dashboard":
        return (
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Simulation Dashboard
            </h2>
            <p className="mb-4">
              The dashboard is the primary interface for researchers and
              clinicians. Built using React and Tailwind, it connects to AWS
              AppSync to retrieve telemetry and simulation data.
            </p>
            <ul className="list-disc list-inside">
              <li>View real-time sensor streams and flow graphs</li>
              <li>Run simulations with customized inputs</li>
              <li>Inspect system health and logs</li>
              <li>Trigger maintenance alerts and sync actions</li>
            </ul>
          </section>
        );
      case "testing-verification":
        return (
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Testing & Verification
            </h2>
            <p className="mb-4">
              The prototype has been tested under resting, moderate, and high
              activity levels. Each scenario confirmed that the system could
              accurately respond to simulated physiological changes.
            </p>
            <p>
              AWS CloudWatch logs confirmed data latency between 38ms–192ms.
              Sensor readings were verified using test equipment to ensure
              realistic output within acceptable medical standards.
            </p>
          </section>
        );
      case "customer-needs":
        return (
          <section>
            <h2 className="text-2xl font-semibold mb-4">Customer Needs</h2>
            <p className="mb-4">
              Stakeholders include patients, biomedical engineers, VAD
              manufacturers, and healthcare providers. Their needs are reflected
              in system design:
            </p>
            <ul className="list-disc list-inside">
              <li>
                <strong>Patients:</strong> Reduced hospitalization and adaptive
                comfort
              </li>
              <li>
                <strong>Engineers:</strong> Modular, upgradable system with
                simulation capabilities
              </li>
              <li>
                <strong>Clinicians:</strong> Data-driven monitoring, alerts, and
                remote access
              </li>
              <li>
                <strong>Manufacturers:</strong> Novel technology with high
                commercial potential
              </li>
            </ul>
          </section>
        );
      case "conclusion":
        return (
          <section>
            <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
            <p>
              The A-VAD system combines intelligent sensing, adaptive control,
              and modern cloud infrastructure to address real clinical
              challenges. It is positioned for further prototyping, trials, and
              potentially influencing future VAD product lines.
            </p>
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <main className="bg-stone-50 min-h-screen">
      <section className="px-16 py-10 w-full mx-auto">
        <NavigationHeader />
        <div className="flex justify-between items-center w-full mb-10">
          <OverviewHeader />
          <SearchSection />
        </div>
        <div className="flex gap-10">
          <aside className="w-1/4">
            <div className="bg-white rounded-2xl shadow px-6 py-4 sticky top-10">
              <h3 className="text-lg font-semibold mb-4">Docs Navigation</h3>
              <ul className="space-y-2">
                {sections.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => setActiveSection(section.id)}
                      className={`text-left w-full px-3 py-2 rounded-md transition-colors duration-200 ${
                        activeSection === section.id
                          ? "bg-blue-100 text-blue-800"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {section.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
          <div className="bg-white rounded-2xl shadow px-10 py-8 w-3/4">
            {renderSection()}
          </div>
        </div>
      </section>
    </main>
  );
}
