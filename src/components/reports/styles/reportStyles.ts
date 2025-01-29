import { StyleSheet } from '@react-pdf/renderer';

export const reportStyles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: 'Helvetica',
    fontSize: 12,
    color: '#1F2937'
  },
  coverPage: {
    padding: 40,
    backgroundColor: '#FDF2F8',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  logoContainer: {
    marginBottom: 40
  },
  logo: {
    width: 80,
    height: 80
  },
  mainTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#BE185D',
    marginBottom: 16,
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 24,
    color: '#4B5563',
    marginBottom: 40,
    textAlign: 'center'
  },
  userInfo: {
    marginBottom: 40,
    textAlign: 'center'
  },
  userName: {
    fontSize: 20,
    color: '#1F2937',
    marginBottom: 8
  },
  date: {
    fontSize: 16,
    color: '#6B7280'
  },
  decorativeLine: {
    width: '60%',
    height: 1,
    backgroundColor: '#EC4899',
    marginBottom: 40,
    alignSelf: 'center'
  },
  tagline: {
    fontSize: 18,
    color: '#BE185D',
    fontStyle: 'italic',
    textAlign: 'center'
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#BE185D',
    marginBottom: 24,
    borderBottom: '1 solid #E5E7EB',
    paddingBottom: 8
  },
  introText: {
    marginBottom: 24,
    lineHeight: 1.6
  },
  geniusTypesContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    marginBottom: 24
  },
  geniusType: {
    width: '45%',
    padding: 12,
    backgroundColor: '#FDF2F8',
    borderRadius: 4,
    marginBottom: 16
  },
  geniusLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#BE185D',
    marginBottom: 4
  },
  geniusDescription: {
    fontSize: 10,
    color: '#6B7280'
  },
  methodologyNote: {
    fontSize: 10,
    color: '#6B7280',
    fontStyle: 'italic',
    marginTop: 24
  },
  resultsSection: {
    marginBottom: 24
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#BE185D',
    marginBottom: 8
  },
  sectionDescription: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 16
  },
  resultItem: {
    padding: 8,
    backgroundColor: '#FDF2F8',
    marginBottom: 8,
    borderRadius: 4
  },
  resultLabel: {
    fontSize: 14,
    color: '#1F2937'
  },
  pairingTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#BE185D',
    marginBottom: 16,
    textAlign: 'center'
  },
  pairingDescription: {
    marginBottom: 24,
    lineHeight: 1.6
  },
  pairingDetails: {
    marginTop: 24
  },
  section: {
    marginBottom: 24
  },
  bulletPoints: {
    marginLeft: 12
  },
  bulletPoint: {
    marginBottom: 8
  }
});