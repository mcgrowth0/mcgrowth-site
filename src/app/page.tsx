'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Calendar, Zap, MessageSquare, Clock, ShieldCheck, ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// ---- Helper components ----
const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
)

const Section = ({
  id,
  className = "",
  children,
}: {
  id?: string
  className?: string
  children?: React.ReactNode
}) => (
  <section id={id} className={`py-16 sm:py-24 ${className}`}>{children}</section>
)

const Feature = ({
  icon: Icon,
  title,
  desc,
}: {
  icon: React.ComponentType<{ className?: string }>
  title: string
  desc: string
}) => (
  <Card className="rounded-2xl">
    <CardHeader className="space-y-2">
      <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
        <Icon className="h-6 w-6" />
      </div>
      <CardTitle className="text-lg">{title}</CardTitle>
    </CardHeader>
    <CardContent className="text-sm text-muted-foreground">{desc}</CardContent>
  </Card>
)

const Stat = ({ value, label }: { value: string | number; label: string }) => (
  <div className="text-center">
    <div className="text-3xl font-bold tracking-tight sm:text-4xl">{value}</div>
    <div className="text-sm text-muted-foreground">{label}</div>
  </div>
)

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium">
    {children}
  </span>
)

// ROI Calculator
function ROICalc() {
  const [jobValue, setJobValue] = React.useState(8000)
  const [monthlyFee, setMonthlyFee] = React.useState(500)
  const [closeRate, setCloseRate] = React.useState(35)

  const leadsNeeded = Math.max(1, Math.ceil((monthlyFee / (jobValue * (closeRate/100)))))

  return (
    <Card className="rounded-2xl">
      <CardHeader>
        <CardTitle>ROI Snapshot</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div>
            <label className="text-sm text-muted-foreground">Avg. job value ($)</label>
            <input type="number" value={jobValue} onChange={e=>setJobValue(parseInt(e.target.value||'0'))} className="mt-1 w-full rounded-xl border p-2" />
          </div>
          <div>
            <label className="text-sm text-muted-foreground">Monthly fee ($)</label>
            <input type="number" value={monthlyFee} onChange={e=>setMonthlyFee(parseInt(e.target.value||'0'))} className="mt-1 w-full rounded-xl border p-2" />
          </div>
          <div>
            <label className="text-sm text-muted-foreground">Close rate (%)</label>
            <input type="number" value={closeRate} onChange={e=>setCloseRate(parseInt(e.target.value||'0'))} className="mt-1 w-full rounded-xl border p-2" />
          </div>
        </div>
        <div className="rounded-xl bg-muted p-4 text-sm">
          With your numbers, you only need <span className="font-semibold">{leadsNeeded} booked lead(s)</span> to cover your monthly fee.
        </div>
      </CardContent>
    </Card>
  )
}

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
        <Container>
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 64 64" className="h-9 w-9 rounded-md border p-1">
                <rect x="10" y="30" width="8" height="20" fill="currentColor" />
                <rect x="24" y="24" width="8" height="26" fill="currentColor" />
                <rect x="38" y="18" width="8" height="32" fill="currentColor" />
                <path d="M8 40 L26 28 L40 32 L54 16" stroke="currentColor" strokeWidth="4" fill="none" />
                <path d="M54 16 L52 24 L60 22 Z" fill="currentColor" />
              </svg>
              <span className="font-semibold tracking-tight">MCGrowth</span>
            </div>
            <nav className="hidden items-center gap-6 sm:flex text-sm">
              <a href="#features" className="hover:opacity-80">Features</a>
              <a href="#how" className="hover:opacity-80">How it works</a>
              <a href="#pricing" className="hover:opacity-80">Pricing</a>
              <a href="#faq" className="hover:opacity-80">FAQ</a>
            </nav>
            <div className="flex items-center gap-3">
              <Button asChild variant="outline" className="rounded-2xl">
                <a href="#contact">Contact</a>
              </Button>
              <Button asChild className="rounded-2xl">
                <a href="#demo">Book Demo</a>
              </Button>
            </div>
          </div>
        </Container>
      </header>

      {/* Hero */}
      <Section id="home" className="pt-12">
        <Container>
          <div className="grid items-center gap-10 md:grid-cols-2">
            <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.5}} className="space-y-6">
              <Badge>Roofing • AI Follow-Up • Bookings</Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Never miss another roofing lead</h1>
              <p className="text-lg text-muted-foreground">MCGrowth is your 24/7 AI receptionist for roofers. It texts back missed calls in seconds, qualifies homeowners, and books estimates straight into your calendar.</p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-2xl">
                  <a href="#demo">See live demo</a>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-2xl">
                  <a href="#features">Explore features</a>
                </Button>
              </div>
              <div className="flex items-center gap-6 pt-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4"/> Month-to-month</div>
                <div className="flex items-center gap-2"><Clock className="h-4 w-4"/> Go live in days</div>
              </div>
            </motion.div>
            <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.6}} className="space-y-4">
              <Card className="rounded-2xl">
                <CardHeader>
                  <CardTitle>What your AI does</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4 sm:grid-cols-2">
                  <div className="flex items-start gap-3"><Phone className="mt-1 h-5 w-5"/><div><div className="font-medium">Instant response</div><div className="text-sm text-muted-foreground">Texts back missed calls & web leads in seconds.</div></div></div>
                  <div className="flex items-start gap-3"><MessageSquare className="mt-1 h-5 w-5"/><div><div className="font-medium">Smart follow-up</div><div className="text-sm text-muted-foreground">Persistent sequences until the homeowner replies.</div></div></div>
                  <div className="flex items-start gap-3"><Calendar className="mt-1 h-5 w-5"/><div><div className="font-medium">Books estimates</div><div className="text-sm text-muted-foreground">Schedules to Google/Outlook with reminders.</div></div></div>
                  <div className="flex items-start gap-3"><Zap className="mt-1 h-5 w-5"/><div><div className="font-medium">Qualifies leads</div><div className="text-sm text-muted-foreground">Repair vs replace, urgency, insurance, address.</div></div></div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-6 rounded-2xl border p-6 sm:grid-cols-4">
            <Stat value="24/7" label="Lead coverage"/>
            <Stat value=">90%" label="Faster first response"/>
            <Stat value="5–10+" label="Extra jobs / mo."/>
            <Stat value="1 job" label="Typical breakeven"/>
          </div>
        </Container>
      </Section>

      {/* Features */}
      <Section id="features">
        <Container>
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight">Built for roofers</h2>
            <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">Purpose-built playbooks for storm damage, leaks, and full replacements. Works alongside your team — nights, weekends, and holidays included.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Feature icon={Phone} title="Missed-call capture" desc="Turn every voicemail into a live text conversation in seconds."/>
            <Feature icon={MessageSquare} title="Automated nurture" desc="Multi-touch sequences keep prospects warm until they book."/>
            <Feature icon={Calendar} title="Calendar booking" desc="Two-way sync with Google/Outlook, confirmations & reminders."/>
            <Feature icon={Zap} title="Lead qualification" desc="Collects photos, addresses, insurance and job type automatically."/>
            <Feature icon={ShieldCheck} title="Spam filtering" desc="Routes real homeowners to you, filters junk and robocalls."/>
            <Feature icon={Clock} title="After-hours coverage" desc="Win jobs your competitors miss while they’re closed."/>
          </div>
        </Container>
      </Section>

      {/* How it works + ROI */}
      <Section id="how" className="bg-muted/40">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">How it works</h3>
              <ol className="space-y-3 text-sm">
                <li className="flex gap-3"><CheckCircle className="mt-0.5 h-5 w-5"/>We connect your phone number & web forms to the AI.</li>
                <li className="flex gap-3"><CheckCircle className="mt-0.5 h-5 w-5"/>AI texts back missed calls instantly and qualifies the homeowner.</li>
                <li className="flex gap-3"><CheckCircle className="mt-0.5 h-5 w-5"/>It books an estimate on your calendar and sends reminders.</li>
                <li className="flex gap-3"><CheckCircle className="mt-0.5 h-5 w-5"/>You get a clean handoff with all details in one place.</li>
              </ol>
              <div className="rounded-2xl border p-4 text-sm text-muted-foreground">Works with your existing tools. No new apps for your crew.</div>
            </div>
            <ROICalc />
          </div>
        </Container>
      </Section>

      {/* Pricing */}
      <Section id="pricing">
        <Container>
          <div className="mb-10 text-center">
            <h3 className="text-2xl font-semibold">Simple pricing</h3>
            <p className="mt-2 text-muted-foreground">$500 setup, then $500/month. Month-to-month. Most partners break even with one additional job.</p>
          </div>
          <div className="mx-auto max-w-md">
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle>MCGrowth Plan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <ul className="list-inside list-disc space-y-2">
                  <li>Missed-call SMS + automated follow-ups</li>
                  <li>Calendar booking + confirmations & reminders</li>
                  <li>Lead qualification (repair vs replace, insurance, photos)</li>
                  <li>Old-lead re-engagement campaigns</li>
                  <li>Email/text handoff + monthly summary</li>
                </ul>
                <div className="flex items-end justify-between pt-2">
                  <div>
                    <div className="text-3xl font-bold">$500<span className="text-base font-normal text-muted-foreground">/mo</span></div>
                    <div className="text-xs text-muted-foreground">+$500 one-time setup</div>
                  </div>
                  <Button className="rounded-2xl" asChild><a href="#demo">Start</a></Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section id="faq" className="bg-muted/40">
        <Container>
          <div className="mb-8 text-center">
            <h3 className="text-2xl font-semibold">FAQ</h3>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Does this replace my receptionist?</AccordionTrigger>
              <AccordionContent>No — it catches overflow and after-hours messages so nothing slips through. Your team stays focused on jobs while AI handles first response and booking.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How fast can we launch?</AccordionTrigger>
              <AccordionContent>Most roofing partners go live within a few days. We plug into your calendar, connect your numbers/forms, and load scripts for your services.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What about spam and tire-kickers?</AccordionTrigger>
              <AccordionContent>AI qualifies each inquiry — job type, address, urgency, insurance. Junk gets filtered. Real homeowners get booked.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Is there a contract?</AccordionTrigger>
              <AccordionContent>Month-to-month. Cancel anytime. Our goal is to earn your business every month by booking jobs.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </Container>
      </Section>

      {/* Contact / Demo */}
      <Section id="demo">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle>Book a demo</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <p>See exactly how MCGrowth captures missed calls and books estimates for your roofing business.</p>
                <Button asChild className="rounded-2xl"><a href="https://calendly.com/mcgrowth0/new-meeting" target="_blank" rel="noreferrer">Open Calendly</a></Button>
                <div className="text-muted-foreground">No pressure. 5–10 minutes.</div>
              </CardContent>
            </Card>

            <Card id="contact" className="rounded-2xl">
              <CardHeader>
                <CardTitle>Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div><span className="font-medium">Email:</span> mcgrowth0@gmail.com</div>
                <div><span className="font-medium">Phone:</span> +1 (415) 518-0393</div>
                <div><span className="font-medium">Service area:</span> United States</div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Footer */}
      <footer className="border-t py-10 text-sm text-muted-foreground">
        <Container>
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-md border"><ArrowRight className="h-4 w-4 rotate-45"/></div>
              <span>© {new Date().getFullYear()} MCGrowth. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:opacity-80">Privacy</a>
              <a href="#" className="hover:opacity-80">Privacy</a>
              <a href="#" className="hover:opacity-80">Terms</a>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  )
}

