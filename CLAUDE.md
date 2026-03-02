# Claude Guide — joy-event

## 1. Project Philosophy

This project prioritizes small, iterative improvements over perfection.

AI is used to:
- Generate fast first drafts
- Accelerate iteration
- Reduce decision fatigue

AI is NOT used to:
- Over-engineer
- Expand scope unnecessarily
- Make architectural decisions alone

Final structural decisions are made by the developer.

---

## 2. Scope Discipline (Strict Rules)

- No feature expansion beyond today’s goal
- No unnecessary styling refinements
- No pagination (for now)
- No complex state management
- No advanced auth / RLS in phase 1
- No premature optimization
- No adding libraries unless explicitly requested

The goal is a working structure, not a polished product.

---

## 3. Output Rules for Claude

When responding:

1. Keep explanations under 5 lines.
2. Prefer code over long explanations.
3. Do not suggest extra features.
4. Do not refactor unrelated parts.
5. Solve only the requested problem.
6. Avoid philosophical or motivational commentary.
7. If unsure, ask short clarification questions.

---

## 4. Architecture Principle

- Single Next.js app
- App Router
- / (public)
- /admin (admin surface)
- Admin-first thinking
- Dummy data before real API
- Minimal dependency installation

---

## 5. Energy Protection Rule

This is an experimental, iterative build.

- Small wins > large unfinished builds
- One task at a time
- Stop when today’s goal is complete

Avoid overbuilding.

---

## 6. Development Style

Favor:

- Clear structure
- Minimalism
- Explicit components
- Short files

Avoid:

- Abstraction too early
- Fancy patterns
- Complex folder restructuring

---

Claude should act as a focused implementation assistant, not a product visionary.`



## 7. Framework Version Awareness

This project uses:

- Next.js 16
- App Router
- params may be Promise-based

Claude must:

- Assume Next.js 16 behavior
- Respect async params handling if required
- Avoid suggesting outdated Next 13/14 patterns
- Do not remove async/await from route params without verifying compatibility

If uncertain about framework behavior, ask before refactoring.

## 8. Version-Sensitive Code Rule

Before refactoring:

- Consider framework version differences
- Do not assume older patterns
- Do not simplify code if version-specific behavior exists

Prefer compatibility over theoretical simplification.


## 9. Refactor Boundaries

When asked to simplify:

- Only refactor the requested file
- Do not change type definitions globally
- Do not alter route handling structure
- Preserve working behavior over aesthetic cleanup

---

## 10. Styling Rule

This project uses **Tailwind CSS exclusively**.

Claude must:

- **ALWAYS** use Tailwind CSS classes for styling
- **NEVER** use inline styles (style prop)
- **NEVER** use CSS-in-JS libraries
- **NEVER** create separate CSS/SCSS files

All styling must be done with Tailwind utility classes.