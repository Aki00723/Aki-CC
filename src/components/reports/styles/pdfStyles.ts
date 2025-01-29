import { StyleSheet } from '@react-pdf/renderer';

// Define consistent colors
const colors = {
  primary: '#EC4899', // Pink
  primaryLight: '#FDF2F8',
  text: '#1F2937',
  textLight: '#6B7280',
  border: '#E5E7EB',
  background: '#FFFFFF'
};

// Define consistent spacing
const spacing = {
  page: 40,
  section: 20,
  paragraph: 10
};

// Define consistent typography
const typography = {
  title: {
    size: 24,
    lineHeight: 1.2
  },
  heading: {
    size: 18,
    lineHeight: 1.4
  },
  body: {
    size: 12,
    lineHeight: 1.6
  },
  small: {
    size: 10,
    lineHeight: 1.4
  }
};

export const pdfStyles = StyleSheet.create({
  page: {
    padding: spacing.page,
    backgroundColor: colors.background,
    color: colors.text,
    fontSize: typography.body.size,
    lineHeight: typography.body.lineHeight
  },
  
  coverPage: {
    backgroundColor: colors.primaryLight,
    padding: spacing.page,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  },
  
  title: {
    fontSize: typography.title.size,
    color: colors.primary,
    marginBottom: spacing.section,
    textAlign: 'center'
  },
  
  subtitle: {
    fontSize: typography.heading.size,
    color: colors.textLight,
    marginBottom: spacing.section,
    textAlign: 'center'
  },
  
  sectionTitle: {
    fontSize: typography.heading.size,
    color: colors.primary,
    marginBottom: spacing.paragraph,
    borderBottom: `1pt solid ${colors.border}`,
    paddingBottom: spacing.paragraph / 2
  },
  
  paragraph: {
    marginBottom: spacing.paragraph,
    lineHeight: typography.body.lineHeight
  },
  
  list: {
    marginLeft: spacing.section,
    marginBottom: spacing.section
  },
  
  listItem: {
    flexDirection: 'row',
    marginBottom: spacing.paragraph / 2
  },
  
  bullet: {
    width: 10,
    marginRight: 5
  },
  
  scoreContainer: {
    marginBottom: spacing.section
  },
  
  scoreRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.paragraph
  },
  
  scoreLabel: {
    width: '30%',
    fontSize: typography.body.size
  },
  
  scoreBar: {
    flex: 1,
    height: 12,
    backgroundColor: colors.primaryLight,
    marginHorizontal: spacing.paragraph
  },
  
  scoreValue: {
    width: '15%',
    textAlign: 'right',
    fontSize: typography.body.size
  },
  
  footer: {
    position: 'absolute',
    bottom: spacing.page,
    left: spacing.page,
    right: spacing.page,
    textAlign: 'center',
    color: colors.textLight,
    fontSize: typography.small.size,
    borderTop: `1pt solid ${colors.border}`,
    paddingTop: spacing.paragraph
  }
});