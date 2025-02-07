import { CommandMenu } from "@/components/command-menu";
import { ProjectCard } from "@/components/project-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { RESUME_DATA_PT_BR } from "@/data/resume-data_pt-br";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${RESUME_DATA_PT_BR.name} | ${RESUME_DATA_PT_BR.about}`,
  description: RESUME_DATA_PT_BR.summary,
};

export default function Page() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 md:p-16">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-2xl font-bold">{RESUME_DATA_PT_BR.name}</h1>
            <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground">
              {RESUME_DATA_PT_BR.about}
            </p>
            <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={RESUME_DATA_PT_BR.locationLink}
                target="_blank"
              >
                <GlobeIcon className="size-3" />
                {RESUME_DATA_PT_BR.location}
              </a>
            </p>
          </div>
          <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
            {RESUME_DATA_PT_BR.contact.email ? (
              <Button className="size-8" variant="outline" size="icon" asChild>
                <a href={`mailto:${RESUME_DATA_PT_BR.contact.email}`}>
                  <MailIcon className="size-4" />
                </a>
              </Button>
            ) : null}
            {RESUME_DATA_PT_BR.contact.tel ? (
              <Button className="size-8" variant="outline" size="icon" asChild>
                <a href={`tel:${RESUME_DATA_PT_BR.contact.tel}`}>
                  <PhoneIcon className="size-4" />
                </a>
              </Button>
            ) : null}
            {RESUME_DATA_PT_BR.contact.social.map((social) => (
              <Button
                key={social.name}
                className="size-8"
                variant="outline"
                size="icon"
                asChild
              >
                <a href={social.url}>
                  <social.icon className="size-4" />
                </a>
              </Button>
            ))}
          </div>
          <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex">
            {RESUME_DATA_PT_BR.contact.email ? (
              <a href={`mailto:${RESUME_DATA_PT_BR.contact.email}`}>
                <span className="underline">{RESUME_DATA_PT_BR.contact.email}</span>
              </a>
            ) : null}
            {RESUME_DATA_PT_BR.contact.tel ? (
              <a href={`tel:${RESUME_DATA_PT_BR.contact.tel}`}>
                <span className="underline">{RESUME_DATA_PT_BR.contact.tel}</span>
              </a>
            ) : null}
          </div>

          <Avatar className="hidden size-28">
            <AvatarImage alt={RESUME_DATA_PT_BR.name} src={RESUME_DATA_PT_BR.avatarUrl} />
            <AvatarFallback>{RESUME_DATA_PT_BR.initials}</AvatarFallback>
          </Avatar>
        </div>
        <Section>
          <h2 className="text-xl font-bold">About</h2>
          <p className="text-pretty font-mono text-sm text-muted-foreground">
            {RESUME_DATA_PT_BR.summary}
          </p>
        </Section>
        <Section>
          <h2 className="text-xl font-bold">Work Experience</h2>
          {RESUME_DATA_PT_BR.work.map((work) => {
            return (
              <Card key={work.company}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                      {work.link ? (
                        <a className="hover:underline" href={work.link}>
                          {work.company}
                        </a>
                      ) : (
                        work.company
                      )}
                      <span className="inline-flex gap-x-1">
                        {work.badges.map((badge) => (
                          <Badge
                            variant="secondary"
                            className="align-middle text-xs"
                            key={badge}
                          >
                            {badge}
                          </Badge>
                        ))}
                      </span>
                    </h3>
                    <div className="text-sm tabular-nums text-gray-500">
                      {work.start} - {work.end}
                    </div>
                  </div>

                  <h4 className="font-mono text-sm leading-none">
                    {work.title}
                  </h4>
                </CardHeader>
                <CardContent className="mt-2 text-xs">
                  {work.description}
                </CardContent>
              </Card>
            );
          })}
        </Section>
        <Section>
          <h2 className="text-xl font-bold">Education</h2>
          {RESUME_DATA_PT_BR.education.map((education) => {
            return (
              <Card key={education.school}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="font-semibold leading-none">
                      {education.school}
                    </h3>
                    <div className="text-sm tabular-nums text-gray-500">
                      {education.start} - {education.end}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="mt-2">{education.degree}</CardContent>
              </Card>
            );
          })}
        </Section>
        <Section>
          <h2 className="text-xl font-bold">Skills</h2>
          <div className="flex flex-wrap gap-1">
            {RESUME_DATA_PT_BR.skills.map((skill) => {
              return <Badge key={skill}>{skill}</Badge>;
            })}
          </div>
        </Section>

        <Section className="print-force-new-page scroll-mb-16">
          <h2 className="text-xl font-bold">Projects</h2>
          <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
            {RESUME_DATA_PT_BR.projects.map((project) => {
              return (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  tags={project.techStack}
                  link={"link" in project ? project.link.href : undefined}
                />
              );
            })}
          </div>
        </Section>
      </section>

      <CommandMenu
        links={[
          {
            url: RESUME_DATA_PT_BR.personalWebsiteUrl,
            title: "Personal Website",
          },
          ...RESUME_DATA_PT_BR.contact.social.map((socialMediaLink) => ({
            url: socialMediaLink.url,
            title: socialMediaLink.name,
          })),
        ]}
      />
    </main>
  );
}
